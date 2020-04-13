import React, { Component } from "react";
import axios from 'axios';
import {  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';


export default class Sites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sites: [],
    };

  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_WS_URL}/sites/all`)
    .then(res => {
      this.setState({
        sites : res.data,
      })
      console.log(res.data);
    });
  }

  render() {
    
    const {sites} = this.state;

    return (
      <div className="col-lg">

        <h1>Sites List</h1>
    <div className="animated fadeIn">
              <Row>  
                <Col>  
                  <Card>  
                    <CardHeader>  
                      <i className="fa fa-align-justify"></i> Sites List  
                      </CardHeader>  
                    <CardBody>  
                      <Table hover bordered striped responsive size="sm">  
                        <thead>  
                          <tr>
                            <th>Site Name</th>  
                            <th>Alias Name</th>  
                            <th>Location</th>
                          </tr> 
                        </thead> 
                        {
                          sites.map((sites, index) => ( 
                        <tbody key={index}>
                              <tr>
                                <td>{sites.site_name}</td> 
                                <td>{sites.alias_name}</td>
                                <td>{sites.location}</td>
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
