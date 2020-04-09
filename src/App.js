import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Sites from "./components/site";
import Employee from "./components/employee";
import AllEmployee from "./components/employee-list";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
              Simona
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/employee/all"} className="nav-link">
                  Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/sites"} className="nav-link">
                  Sites
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/employee", "/employee/all"]} component={AllEmployee} />
              <Route exact path="/sites" component={Sites} />
              <Route path="/:id" component={Employee} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;