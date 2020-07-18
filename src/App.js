import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import BaseRouter from './routes';

import * as actions from './store/actions/auth';
import Main from './components/Main';
import SignInSide from './components/SignInSide';
import Dashboard from './components/Dashboard/Dashboard';
import { history } from './helpers/history';

function App() {

    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Main} />{" "}
            <Route exact path="/employee" component={SignInSide} />{" "}
            <Route path="/employee/dashboard" component={Dashboard} />{" "}
          </Switch>
        </Router>
        
      </div>
    );
  
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}


export default connect(mapStateToProps)(App);
