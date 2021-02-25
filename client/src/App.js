import React, { Fragment, useState } from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import Homenav from "./components/Home";
import Takequiz from "./components/Takequiz";
import dashboard from "./components/Dashboard";

function App() {
  const [loggedin, setloggedin] = useState(false);

  let location = useLocation();
  return (
    <Fragment>
      <nav>
        <Homenav setloggedin={setloggedin} />
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Takequiz} />
          <Route exact path="/dashboard" component={dashboard} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;