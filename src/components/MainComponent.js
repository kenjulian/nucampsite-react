import React, {Component} from 'react';//imports w/o ./ are from modules from the node modules folder
import {Navbar, NavbarBrand} from 'reactstrap';//components
import Directory from './DirectoryComponent'
import CampsiteInfo from './CampsiteInfoComponent';

import {CAMPSITES} from '../shared/campsites'

class Main extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        } 

    }

  onCampsiteSelect(campsiteId) {
        //this method changes the value of the state (selectedCampsite property)
        this.setState({selectedCampsite: campsiteId});
        //prevents having to directly change state: this.state.selectedCampsite = campsite
    }

  render() {
      return (
          <div >
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">NuCamp</NavbarBrand>
              </div>
              </Navbar>
              <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>
              <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
          </div>
      );
  }
}


export default Main;//this is a module file because it has an export
