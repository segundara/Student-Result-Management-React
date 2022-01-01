import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../Pages/Dashboards/Dashboard";
import Customers from "../Pages/Customers/Customer";
import Transcripts from "../Pages/Transcripts/Transcript";

import "../Assets/css/styles.css";

const Routes = () => {
  return (
    <Switch>
      <Route path="/Student-Result-Management-React" exact component={Dashboard} />
      {/* <Route path="/Student-Result-Management-React/customers" component={Customers} /> */}
      <Route path="/Student-Result-Management-React/transcripts" component={Transcripts} />
    </Switch>
  );
};

export default Routes;
