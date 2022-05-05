import React, {Component} from 'react';//imports w/o ./ are from modules from the node modules folder
import Directory from './DirectoryComponent'
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {actions} from 'react-redux-form';
import { postComment, fetchCampsites, fetchComments, fetchPromotions } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


//gets state from redux and makes it accessible to Main component via props
const mapStateToProps = state => {
  return {
    campsites: state.campsites,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions
  }
}

//makes action creator function available as prop here in MainComponent
const mapDispatchToProps = {
  postComment: (campsiteId, rating, author, text) => (postComment(campsiteId, rating, author, text)),
  fetchCampsites: () => (fetchCampsites()),
  resetFeedbackForm: () => (actions.reset('feedbackForm')),
  fetchComments: () => (fetchComments()),//these action creatotrs return an action obj with property type and payLoad
  fetchPromotions: () => (fetchPromotions())
};

class Main extends Component {
    //built in react lifecycle method
    //called after a component is inserted into the DOM; safe place to fetch data
  componentDidMount() {
      this.props.fetchCampsites();
      this.props.fetchComments();
      this.props.fetchPromotions();

  }

  //onCampsiteSelect(campsiteId) {
        //this method changes the value of the state (selectedCampsite property)
        //this.setState({selectedCampsite: campsiteId});
        //prevents having to directly change state: this.state.selectedCampsite = campsite
    //}

  render() {
    //   arrow function allows this to refer to parent component's state
      const HomePage = () => {
          return (
              <Home 
                campsite={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]}
                campsitesLoading={this.props.campsites.isLoading}
                campsitesErrMess={this.props.campsites.errMess}
                promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                promotionLoading={this.props.promotions.isLoading}
                promotionErrMess={this.props.promotions.errMess}
                partner={this.props.partners.filter(partner => partner.featured)[0]}
              />
          )
      }

      const CampsiteWithId = ({match}) => {
        return (
          <CampsiteInfo 
            campsite={this.props.campsites.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
            comments={this.props.comments.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
            isLoading={this.props.campsites.isLoading}
            errMess={this.props.campsites.errMess}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment} />
        );
      }
      return (
          <div >
              <Header />
              <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                    <Switch>
                      <Route path='/home' component={HomePage} />
                      {/* use render attribute when data needs to be passed, otherwise, component attribute will route it */}
                      <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>} />
                      <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                      <Route path='/aboutus' render={() => <About partners={this.state.partners} />} />
                      <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                      <Redirect to='/home' />
                    </Switch>
                  </CSSTransition>
              </TransitionGroup>
              {/* this.props.onClick is from the onClick props that was passed in, an onClick event that fires onCampsiteSelect  */}
              {/* <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} /> */}
              <Footer />
          </div>
      );
  }
}

//allows Main component to take its state from the redux store
//wrap withRouter around our export so react router works with changes to export
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));//this is a module file because it has an export
