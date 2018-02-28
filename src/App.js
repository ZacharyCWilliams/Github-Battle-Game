import React, { Component } from 'react';
import './App.css';
import Popular from './Popular';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import { Switch } from 'react-router-dom';
import Results from './Results'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route exact path='/' component={Home} />
            <Route render={function () {
              return <h2>Not Found</h2>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
