import React, { Component } from "react";
import axios from 'axios';
import {  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { Link } from "react-router-dom";
import { QRCode } from 'react-qrcode-logo';
import Popup from "reactjs-popup";

export default class AllEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: []
      // searchField: ''
    };

  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_WS_URL}/employee/all`)
    .then(res => {
      this.setState({
          employee: res.data
      })
    });
  }

  render() {
    const {employee} = this.state;
    // const filteredEmployee = employee.filter(employee =>
    //   employee.name.toLowerCase().includes(searchField.toLowerCase())
    //   );

    return (
      <div className="col-lg">
        <div className="input-group-prepend">
          <input className="form-control" type='search' placeholder='search employee'  
          onChange={e => this.setState({ searchField: e.target.value })}
         />
        </div>


        <h1>Employee List</h1>
    <div className="animated fadeIn">
              <Row>  
                <Col>  
                  <Card>  
                    <CardHeader>  
                      <i className="fa fa-align-justify"></i> Employee List  
                      </CardHeader>  
                    <CardBody>  
                      <Table hover bordered striped responsive size="sm">  
                        <thead>  
                          <tr>  
                            <th>Photos</th>  
                            <th>Name</th>  
                            <th>Adress</th>  
                            <th>Phone</th>
                            <th>Profile</th>
                            <th>QR</th>
                          </tr> 
                        </thead> 
                        {employee.map((employee) => ( 
                          
                        <tbody>
                              <tr>  
                                <td>{employee.image}</td>
                                <td>{employee.name}</td> 
                                <td>{employee.address}</td> 
                                <td>{employee.phone_number}</td> 
                                <td><Link to={"/" + employee.id} >View Profile</Link> </td>
                                <td>
                                  <Popup trigger={<button className="badge"> 
                                    Generate</button>}modal closeOnDocumentClick>
                                  <QRCode value={employee.qrId} /></Popup>
                                </td> 
                              </tr>
                        </tbody>  
                        ))} 
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
