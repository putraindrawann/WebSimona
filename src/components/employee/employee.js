import React, { Component } from "react";
import {  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { QRCode } from 'react-qrcode-logo';
import Popup from "reactjs-popup";
import jsPDF from 'jspdf';
import axios from 'axios';
import Navigation from "../Nav";


export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.getEmployee = this.getEmployee.bind(this);

    this.state = {
      currentEmployee: [],

    };
  }

  getEmployee(id) {
    axios.get(`${process.env.REACT_APP_WS_URL}/employee?id=${id}`)
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


  componentDidMount() {
    this.getEmployee(this.props.match.params.id);
  }

 

  jsPdfGenerator = () => { 
    const { currentEmployee } = this.state;
    currentEmployee.map(currentEmployee => {
      
    var doc = new jsPDF('p','pt');
    doc.text(100,40, 'Absence Employee')
    doc.text(100, 80, 'Nama                      : '+currentEmployee.name)
    doc.text(100, 100, 'Birth Place & Date  : '+currentEmployee.birth_place+','+currentEmployee.birth_date)
    doc.text(100, 120, 'Adress                    : '+currentEmployee.address)
    doc.text(100, 140, 'Site                         : '+currentEmployee.place)

    doc.save(`Absence ${currentEmployee.name}.pdf`);
    return currentEmployee;
    })
  }

  render() {
    const { currentEmployee } = this.state;
    return (
      <div>
        <Navigation />

            {currentEmployee.map(currentEmployee => (
              <div key ="index" className="col-md-8">
                <h5>Employee Profile</h5>
                <Row>
                <div><img src={"http://" + currentEmployee.image}alt="new"/></div>
                <div className="col-md-8">
                <ul type="none">
                  <li><label><strong>Name: </strong>{currentEmployee.name}</label></li>
                  <li><label><strong>Gender: </strong>{currentEmployee.gender}</label></li>
                  <li><label><strong>Blood : </strong>{currentEmployee.blood_type}</label></li>
                  <li><label><strong>Birth Place & Date : </strong>{currentEmployee.birth_place},{currentEmployee.birth_date}</label></li>
                  <li><label><strong>Adress : </strong>{currentEmployee.address}</label></li>
                  <li><label><strong>Phone : </strong>{currentEmployee.phone_number}</label></li>
                  <li><label><strong>Identity : </strong>{currentEmployee.identity}</label></li>
                  <li><label><strong>NFC Id : </strong>{currentEmployee.nfcId}</label></li>
                  <li><label><strong>QR Id : </strong>{currentEmployee.qrId}</label></li>
                  <li><label>
                  <Popup modal trigger={<button className="badge"> 
                                    Generate</button>}>
                                    <div style={{textAlign: "center",}}>
                                      <h3>{currentEmployee.name}</h3>
                                      <div><QRCode value={currentEmployee.qrId}/></div>
                                    </div>
                                  </Popup>
                  </label></li>
                  <li><label><strong>Site : </strong>{currentEmployee.place}</label></li>
                </ul>
                </div>
                </Row>
              </div>
              ))}
              
        <div style={{textAlign: "right"}}>
          <button onClick={this.jsPdfGenerator} >Print</button>
        </div><br/>
        
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
                              <tr>  
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
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

