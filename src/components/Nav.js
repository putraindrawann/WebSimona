import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button} from "reactstrap"
import { Link } from "react-router-dom";
import { Nav  } from 'react-bootstrap';
import "../App.css"

export default class Navigation extends Component {
  

 handleLogout() {
  sessionStorage.clear();
  this.props.history.replace({pathname: '/'});
  }

    render() {

        return (
            <Nav className="navbar navbar-custom navbar-expand navbar-dark">
            <div className="navbar-nav ">
                <Link to={"/home"} className="nav-link">
                  SIMONA
                </Link>
              </div>
            
            <div className="navbar-nav ">
              
              <li className="nav-item">
                <Link to={"/employee"} className="nav-link">
                  Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/addemployee"} className="nav-link">
                  Add Employee
                </Link>
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
            <Link to="/"><Button size="tiny" onClick={this.handleLogout}>Logout</Button></Link>
          </Nav>
        )

    }

    
    
}

