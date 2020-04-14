import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav, NavDropdown, Dropdown } from 'react-bootstrap';


import Employee from "./components/employee/employee";
import AllEmployee from "./components/employee/employee-list";
import AllAttendance from "./components/attendance/attendance";
import Addemployee from "./components/employee/add-employee";
import Login from "./components/login";
import Sites from "./components/site";
import InPage from "./InPage";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loggedIn : false
    }
  }

  render() {
    return (
      <Router>
          <Nav className="navbar navbar-custom navbar-expand navbar-dark">
            <a href="/home" className="navbar-brand ">
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
              <li className="nav-item">
                <Link to={"/sites"} className="nav-link">
                  Sites
                </Link>
              </li>
            </div>
          </Nav>

          <div className="container mt-3">
            <Switch>
              <Route path="/home" component={InPage}/>
              <Route path="/login" component={Login}/>
              {/* <Route path="/employee" component={AllEmployee} /> */}
              <Route exact path={["/employee", "/employee/all"]} component={AllEmployee} onEnter={this.requireAuth}/>
              <Route path="/attendance" component={AllAttendance} />
              <Route path="/addemployee" component={Addemployee} />
              <Route path="/sites" component={Sites}/>
              <Route path="/employee/:id" component={Employee} />
              
            </Switch>
          </div>
        
      </Router>
    );
  }
}

export default App;