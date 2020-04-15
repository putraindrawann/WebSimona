import React, { Component } from "react";
import { HashRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Employee from "./components/employee/employee";
import AllEmployee from "./components/employee/employee-list";
import AllAttendance from "./components/attendance/attendance";
import Addemployee from "./components/employee/add-employee";
import Login from "./components/login";
import Sites from "./components/site";
import InPage from "./components/InPage";

class App extends Component {
  

  render() {
    return (
      <Router>
              <Route path="/" exact component={Login}/>
              <Route path="/home" component={InPage}/>
              <Route path="/attendance" component={AllAttendance} />
              <Route path="/addemployee" component={Addemployee} />
              <Route path="/sites" component={Sites}/>
              <Route path="/employee/:id" component={Employee} />
              <Route exact path="/employee" component={AllEmployee}/>
      </Router>
    );
  }
}

export default App;