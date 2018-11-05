import React, { Component } from 'react';
import Router from './Router'
import Topbar from './components/template/Topbar'
import './helpers/imports'
import './components/template/style.css'
class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <div className="col-md-12">
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
