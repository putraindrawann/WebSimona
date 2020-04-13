import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav, NavDropdown, Dropdown } from 'react-bootstrap';


import Employee from "./components/employee/employee";
import AllEmployee from "./components/employee/employee-list";
import AllAttendance from "./components/attendance/attendance";
import Addemployee from "./components/employee/add-employee";

class App extends Component {
  render() {
    return (
      <Router>
          <Nav className="navbar navbar-custom navbar-expand navbar-light">
            <a href="/" className="navbar-brand ">
              SIMONA
            </a>
            <div className="navbar-nav ">
              <li className="nav-item">
                  <NavDropdown title="Employee" id="basic-nav-dropdown">
                    <Dropdown.Item href="/employee">All Employee</Dropdown.Item>
                  <Dropdown.Divider />
                    <Dropdown.Item href="/addemployee">Add Employee</Dropdown.Item>
                  </NavDropdown>
              </li>
              <li className="nav-item">
                <Link to={"/attendance"} className="nav-link">
                  Attendences
                </Link>
              </li>
            </div>
          </Nav>

          <div className="container mt-3">
            <Switch>
              <Route path={["/employee"]} component={AllEmployee} />
              <Route path={["/attendance"]} component={AllAttendance} />
              <Route path={["/addemployee"]} component={Addemployee} />
              <Route path="/:id" component={Employee} />
            </Switch>
          </div>
        
      </Router>
    );
  }
}

export default App;