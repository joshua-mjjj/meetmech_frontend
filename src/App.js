import React, { Component, Fragment }            from "react";
import { Provider }  from "react-redux";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store         from "./store";
import { loadUser } from "./actions/auth";

import AuthenticationRoute from "./views/AuthenticationRoute.js";

// routes
import HomePage                from "./views/HomePage.js";
import LoginPage               from "./views/LoginPage";
import SignUpPage              from "./views/SignUpPage"
import AuthDashboardContainer  from "./views/AuthDashboardContainer";
var hist = createBrowserHistory();

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem("token");
    if(token){
      store.dispatch(loadUser());
    }
  }

  render() {
    return (
       <Provider store={store}>
        <Router history={hist}>
          <Fragment>
            <Switch>
             <AuthenticationRoute
                path="/dashboard"
                component={AuthDashboardContainer}
              />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
