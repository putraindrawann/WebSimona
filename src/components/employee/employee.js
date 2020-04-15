import React, { Component } from "react";
import {  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { QRCode } from 'react-qrcode-logo';
import Popup from "reactjs-popup";
import axios from 'axios';
import Navigation from "../Nav";
import Report from "./Report";


export default class Employee extends Component {

  constructor(props) {
    super(props);
    this.getEmployee = this.getEmployee.bind(this);
    this.getAttendanceByEmployeeID = this.getAttendanceByEmployeeID.bind(this);
    
    
    this.state = {
      currentEmployee: [],
      Employeeattendance: null,
      
    };
  }

  getAttendanceByEmployeeID(id) {
    axios.get(`${process.env.REACT_APP_WS_URL}/attendance?id=${id}`)
      .then(response => {
        this.setState({
          Employeeattendance: response.data
        });
        // console.log("=======")
        // console.log(response.data);
      })
      .catch(e => {
        // console.log(e);
      });
  }


  getEmployee(id) {
    axios.get(`${process.env.REACT_APP_WS_URL}/employee?id=${id}`)
      .then(response => {
        this.setState({
          currentEmployee: response.data
        });
        // console.log(response.data);
      })
      .catch(e => {
        // console.log(e);
      });
  }


  componentDidMount() {
    this.getEmployee(this.props.match.params.id);
    this.getAttendanceByEmployeeID(this.props.match.params.id);
  }


  
  ReportData = () => {
    var report = new Report();
    const { Employeeattendance, currentEmployee} = this.state;

        currentEmployee.map(currentEmployee => {
          report.title = (currentEmployee.name)
            
          return currentEmployee;
        });

        Employeeattendance && Employeeattendance.attendances.map(attendance => {
        report.content = 
        [
          {
            "id":(attendance.id),
            "date":(attendance.date),
            "enter_at":(attendance.enter_at),
            "out_at":(attendance.out_at)
          }
        ]
        return Employeeattendance;
       })
        
        axios.request({
            url: `http://smm.mylabstudio.info/api-report/report`,
            method: 'POST',
            responseType: 'blob',
            timeout: 30000,
            data: report
        }).then((response) => {
            const blob = response.data;
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(new Blob([blob]));
            link.setAttribute('download', `attendance-report.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        })
	}


  render() {
    const { currentEmployee, Employeeattendance } = this.state;
  
    return (
      <div>
        <Navigation />
        <br />
        
      <div className="col-lg">
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
                  <li><label><strong>Departement : </strong>{currentEmployee.departement}</label></li>
                  <li><label><strong>Position : </strong>{currentEmployee.position}</label></li>
                  <li><label><strong>Site : </strong>{currentEmployee.place}</label></li>
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
                </ul>
                </div>
                </Row>
              </div>
              ))}
              
        <div style={{textAlign: "right"}}>
          {/* <button onClick={this.jsPdfGenerator} >Print</button> */}
          <button onClick={this.ReportData} >Print</button>
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
                        {Employeeattendance && Employeeattendance.attendances.map(attendance => (
                              <tr key={attendance.id}>  
                                <td>{attendance.id}</td>
                                <td>{attendance.date}</td>
                                <td>{attendance.enter_at}</td>
                                <td>{attendance.out_at}</td>
                              </tr>
                         
                        ))}
                        </tbody>  
                      </Table>  
                    </CardBody>  
                  </Card>  
                </Col>  
              </Row>
                 
            </div>
      </div>
      </div>
    );
  }
}

