import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import KitchenPage from "../Kitchen";
import HomePage from "../Home";
import OrderPage from "../Order";
import SentPage from "../Sent";

import * as ROUTES from "../../constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.ORDER} component={OrderPage} />
      <Route exact path={ROUTES.KITCHEN} component={KitchenPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.SENT} component={SentPage} />
    </div>
  </Router>
);

export default App;
