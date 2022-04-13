import React, {Component} from 'react';//imports w/o ./ are from modules from the node modules folder

import Main from './components/MainComponent'
import './App.css';


class App extends Component {
    
  render() {
      return (
          <div className="App">
             <Main />
          </div>
      );
  }
}


export default App;//this is a module file because it has an export
