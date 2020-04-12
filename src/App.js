import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav, NavDropdown, Dropdown } from 'react-bootstrap';


import Employee from "./components/employee/employee";
import AllEmployee from "./components/employee/employee-list";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="nabar">
          <Nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
              Simona
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                  <NavDropdown title="Employee" id="basic-nav-dropdown">
                    <Dropdown.Item href="/employee/all">All Employee</Dropdown.Item>
                  <Dropdown.Divider />
                    <Dropdown.Item href="/">Add Employee</Dropdown.Item>
                  </NavDropdown>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Sites
                </Link>
              </li>
            </div>
          </Nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/employee", "/employee/all"]} component={AllEmployee} />
              <Route exact path={["/employee", "/employee/all"]} component={AllEmployee} />
              <Route path="/:id" component={Employee} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;