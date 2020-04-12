import React, { Component } from "react";
import EmployeeService from "../../services/employee.service";
import { CardList} from '../card-list/card-list';

export default class AllEmployee extends Component {
  constructor(props) {
    super(props);
    this.retrieveEmployee = this.retrieveEmployee.bind(this);

    this.state = {
      employee: [],
      searchField: ''
    };

  }

  componentDidMount() {
    this.retrieveEmployee();
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

  render() {
    const {employee, searchField} = this.state;
    const filteredEmployee = employee.filter(employee =>
      employee.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="col-md-8">

        <div className="input-group-prepend">
          <input className="form-control" type='search' placeholder='search employee'  
          onChange={e => this.setState({ searchField: e.target.value })}
         />
        </div>

        <div className="col-md-6">
          <h1>Employee List</h1>
          <CardList employee={filteredEmployee}/>
        </div>

      </div>
    );
  }
}
