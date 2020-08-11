import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  HashRouter
} from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/Dashboard";
import CategoryScreen from '../screens/Category'
import DealScreen from '../screens/Deals'

// import { ReadCookie } from "../utils/readCookie";
// import ProtectedRoute from "../utils/protectedRoute";

class Routers extends React.Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   token: null,
  //   name: null,
  //   roles: null,
  // };
  // }
  componentWillMount() {
    // let adminToken = ReadCookie("token");
    // let adminName = ReadCookie("name");
    // let adminRoles = ReadCookie("roles");
    // this.setState({
    //   token: adminToken,
    //   name: adminName,
    //   roles: adminRoles,
    // });
  }
  render() {
    // const { token, name, roles } = this.state;
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <HashRouter>
              <Route exact path="/" component={LoginScreen} />
              <Route exact path="/dashboard" component={DashboardScreen} />
              <Route exact path="/category" component={CategoryScreen} />
              <Route exact path="/deal" component={DealScreen} />
            </HashRouter>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default Routers;
