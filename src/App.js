import React, {Component} from 'react';//imports w/o ./ are from modules from the node modules folder

import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import './App.css';

//captures return value which is the redux store
const store = ConfigureStore();


class App extends Component {
    
  render() {
      return (
        // makes redux store available to components that are children of App component using connect()
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <Main />
            </div>
          </BrowserRouter>
        </Provider>
          
      );
  }
}


export default App;//this is a module file because it has an export
