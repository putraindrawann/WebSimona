import React, { Component } from "react";
import EmployeeService from "../services/employee.service";
import {  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';


export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.getEmployee = this.getEmployee.bind(this);

    this.state = {
      currentEmployee: []
    };
  }

  componentDidMount() {
    this.getEmployee(this.props.match.params.id);
  }


  getEmployee(id) {
    EmployeeService.get(id)
      .then(response => {
        this.setState({
          currentEmployee: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentEmployee } = this.state;

    return (
      <div>
        <div className="col-md-6">
            {currentEmployee.map((currentEmployee) => (
              <div>
                <h5>Profile</h5>
                <ul type="none">
                  <li><label><strong>Name: </strong>{currentEmployee.name}</label></li>
                  <li><label><strong>Gender: </strong>{currentEmployee.gender}</label></li>
                  <li><label><strong>Blood : </strong>{currentEmployee.blood_type}</label></li>
                  <li><label><strong>Birth Place & Date : </strong>{currentEmployee.birth_place},{currentEmployee.birth_date}</label></li>
                  <li><label><strong>Adress : </strong>{currentEmployee.address}</label></li>
                  <li><label><strong>Phone : </strong>{currentEmployee.phone_number}</label></li>
                  <li><label><strong>Identity : </strong>{currentEmployee.identity}</label></li>
                  <li><label><strong>Site : </strong>{currentEmployee.place}</label></li>
                </ul>
              </div>
              ))}
        </div>
        
        <div className="animated fadeIn">  
              <Row>  
                <Col>  
                  <Card>  
                    <CardHeader>  
                      <i className="fa fa-align-justify"></i> Attendences List  
                      </CardHeader>  
                    <CardBody>  
                      <Table hover bordered striped responsive size="sm">  
                        <thead>  
                          <tr>  
                            <th>Id</th>  
                            <th>Date</th>  
                            <th>Entered At</th>  
                            <th>Out At</th>
                          </tr> 
                        </thead>  
                        <tbody>  
                          {  
                            currentEmployee.map((currentEmployee) => {  
                              return <tr>  
                                <td>{currentEmployee.name}</td> 
                                <td>{currentEmployee.name}</td> 
                                <td>{currentEmployee.name}</td> 
                                <td>{currentEmployee.name}</td> 
                                </tr>  
                            })}  
                        </tbody>  
                      </Table>  
                    </CardBody>  
                  </Card>  
                </Col>  
              </Row>  
            </div>
      </div>
    );
  }
}

