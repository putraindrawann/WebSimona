import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav, NavDropdown, Dropdown } from 'react-bootstrap';


export default class Navigation extends Component {

    render() {
        return (
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
        )

    }

    
    
}

