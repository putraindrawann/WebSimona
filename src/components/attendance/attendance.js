import React, { Component } from "react";
import axios from 'axios';
import {  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';


export default class AllAttendance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attendance: [],
    };

  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_WS_URL}/attendance/all`)
    .then(res => {
      this.setState({
          attendance: res.data
      })
    });
  }

  render() {
    const {attendance} = this.state;

    return (
      <div className="col-lg">
        


        <h1>Attendance List</h1>
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
                            <th>Name</th>  
                            <th>Site Name</th>  
                            <th>Location</th>
                          </tr> 
                        </thead> 
                        {attendance.map((attendance) => ( 
                        <tbody>
                              <tr>
                                <td>{attendance.name}</td> 
                                <td>{attendance.enter_at}</td> 
                                <td>{attendance.location}</td>
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
