import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import BaseRouter from './routes';

import * as actions from './store/actions/auth';
import Main from './components/Main';
import SignInSide from './components/SignInSide';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

    return (
      <div className="App">
        <Router>
          <>
            <Route exact path="/" component={Main} />{" "}
            <Route exact path="/employee" component={SignInSide} />{" "}
            <Route exact path="/employee/dashboard" component={Dashboard} />{" "}
          </>
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
