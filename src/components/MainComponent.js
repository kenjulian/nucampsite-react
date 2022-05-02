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
import { addComment, fetchCampsites } from '../redux/ActionCreators';

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
  addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text)),
  fetchCampsites: () => (fetchCampsites())
};

class Main extends Component {
    //built in react lifecycle method
    //called after a component is inserted into the DOM; safe place to fetch data
  componentDidMount() {
      this.props.fetchCampsites();
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
                promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.props.partners.filter(partner => partner.featured)[0]}
              />
          )
      }

      const CampsiteWithId = ({match}) => {
        return (
          <CampsiteInfo 
            campsite={this.props.campsites.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
            comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
            isLoading={this.props.campsites.isLoading}
            errMess={this.props.campsites.errMess}
            addComment={this.props.addComment} />
        );
      }
      return (
          <div >
              <Header />
              <Switch>
                <Route path='/home' component={HomePage} />
                {/* use render attribute when data needs to be passed, otherwise, component attribute will route it */}
                <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>} />
                <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                <Route path='/aboutus' render={() => <About partners={this.state.partners} />} />
                <Route exact path='/contactus' component={Contact} />
                <Redirect to='/home' />
              </Switch>
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
