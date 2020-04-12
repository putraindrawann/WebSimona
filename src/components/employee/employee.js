import React, { Component } from "react";
import EmployeeService from "../../services/employee.service";
import {  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { QRCode } from 'react-qrcode-logo';
import Popup from "reactjs-popup";


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
                <Row>
                <li type="none"><img alt="employee" src={`https://robohash.org/${currentEmployee.id}?set=set5&size=200x200`}/></li>
                <li type="none">
                  <li><label><strong>Name: </strong>{currentEmployee.name}</label></li>
                  <li><label><strong>Gender: </strong>{currentEmployee.gender}</label></li>
                  <li><label><strong>Blood : </strong>{currentEmployee.blood_type}</label></li>
                  <li><label><strong>Birth Place & Date : </strong>{currentEmployee.birth_place},{currentEmployee.birth_date}</label></li>
                  <li><label><strong>Adress : </strong>{currentEmployee.address}</label></li>
                  <li><label><strong>Phone : </strong>{currentEmployee.phone_number}</label></li>
                  <li><label><strong>Identity : </strong>{currentEmployee.identity}</label></li>
                  <li><label><strong>NFC Id : </strong>{currentEmployee.nfcId}</label></li>
                  <li><label><strong>QR Id : </strong>{currentEmployee.qrId}
                  <Popup trigger={<button className="badge"> 
                  Generate QR </button>}modal closeOnDocumentClick>
                    <div>
                      <QRCode value={currentEmployee.qrId} />
                    </div>
                  </Popup>
                  </label></li>
                  <li><label><strong>Site : </strong>{currentEmployee.place}</label></li>
                </li>
                </Row>
              </div>
              ))}
        </div> <br /> <br /> <br />
        
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

