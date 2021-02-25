import React from 'react';
import Home from './components/Home';
import dashboard from "./components/Dashboard";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/dashboard" component={dashboard} />
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
