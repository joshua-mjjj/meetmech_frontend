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
import ResultsPage                from "./views/ResultsPage"
import AuthDashboardContainer     from "./views/AuthDashboardContainer";
import SingleServiceProviderView  from "./views/SingleServiceProviderView";
import About                      from "./views/About";
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
               <Route
                path="/provider_view/:provider_id"
                component={SingleServiceProviderView}
              />
              <Route path="/search" component={ResultsPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/about" component={About} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
