import React, {Component} from 'react';//imports w/o ./ are from modules from the node modules folder

import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


class App extends Component {
    
  render() {
      return (
        <BrowserRouter>
          <div className="App">
             <Main />
          </div>
        </BrowserRouter>
          
      );
  }
}


export default App;//this is a module file because it has an export
