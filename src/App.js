import React, {Component} from 'react';//imports w/o ./ are from modules from the node modules folder
import {Navbar, NavbarBrand} from 'reactstrap';//components
import Directory from './components/DirectoryComponent'
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">NuCamp</NavbarBrand>
              </div>
              </Navbar>
              <Directory />
          </div>
      );
  }
}


export default App;//this is a module file because it has an export
