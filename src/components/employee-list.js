import React, { Component } from "react";
import EmployeeService from "../services/employee.service";
import { Link } from "react-router-dom";

export default class AllEmployee extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveEmployee = this.retrieveEmployee.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveEmployee = this.setActiveEmployee.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      employee: [],
      currentEmployee: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveEmployee();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveEmployee() {
    EmployeeService.getAll()
      .then(response => {
        this.setState({
          employee: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveEmployee();
    this.setState({
      currentEmployee: null,
      currentIndex: -1
    });
  }

  setActiveEmployee(employee, index) {
    this.setState({
      currentEmployee: employee,
      currentIndex: index
    });
  }

  searchTitle() {
    EmployeeService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          employee: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, employee, currentEmployee, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Name"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Employee List</h4>

          <ul className="list-group">
            {employee &&
              employee.map((employee, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveEmployee(employee, index)}
                  key={index}
                >
                  {employee.name}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {currentEmployee ? (
            <div>
              <h4>Employee</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentEmployee.name}
              </div>
              <div>
                <label>
                  <strong>Gender:</strong>
                </label>{" "}
                {currentEmployee.gender}
              </div>
              <div>
                <label>
                  <strong>Identity:</strong>
                </label>{" "}
                {currentEmployee.identity}
              </div>

              <Link
                to={"/" + currentEmployee.id}
                className="badge badge-warning"
              >
                View
              </Link>
            </div>
          ) : 
          (
            <div>
              <br />
              <p>Select Employee for more info...</p>
            </div>
          )
          }
        </div>
      </div>
    );
  }
}
