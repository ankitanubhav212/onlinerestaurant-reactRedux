import React, { Component } from 'react';
import './App.css';
import { Header } from './shared/header';
import { Provider } from 'react-redux';
import Sidebar from './shared/sidebar';
import ResturantList from '../src/component/resturants-list';

const store = require('./reducer').init();

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="App">
          <Header />
          <div className="container">
            <div className="row">
              <Sidebar />
              <ResturantList />
            </div>
          </div>
        </div>

      </Provider>
    );
  }
}

export default App;
