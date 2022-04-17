import React, {Component} from 'react';//imports w/o ./ are from modules from the node modules folder
import Directory from './DirectoryComponent'
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import {CAMPSITES} from '../shared/campsites';

class Main extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            campsites: CAMPSITES,   
        } 

    }

  //onCampsiteSelect(campsiteId) {
        //this method changes the value of the state (selectedCampsite property)
        //this.setState({selectedCampsite: campsiteId});
        //prevents having to directly change state: this.state.selectedCampsite = campsite
    //}

  render() {
      const HomePage = () => {
          return (
              <Home />
          )
      }
      return (
          <div >
              <Header />
              <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>} />
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
