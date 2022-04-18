import React, {Component} from 'react';//imports w/o ./ are from modules from the node modules folder
import Directory from './DirectoryComponent'
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import {CAMPSITES} from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            campsites: CAMPSITES, 
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS  
        } 

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
                campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.state.partners.filter(partner => partner.featured)[0]}
              />
          )
      }

      const CampsiteWithId = ({match}) => {
        return (
          <CampsiteInfo 
            campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
            comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} />
        );
      }
      return (
          <div >
              <Header />
              <Switch>
                <Route path='/home' component={HomePage} />
                {/* use render attribute when data needs to be passed, otherwise, component attribute will route it */}
                <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>} />
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


export default Main;//this is a module file because it has an export
