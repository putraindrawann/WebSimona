import React, { Component } from "react";
import axios from 'axios';
import {  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { Link } from "react-router-dom";
import { QRCode } from 'react-qrcode-logo';
import Popup from "reactjs-popup";
import Navigation from "../Nav";


export default class AllEmployee extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      employee: [],
      isLoaded: false,
      redirectToReferrer:false,
      token:'',
      searchName: ""
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

  onChangeSearchName(e) {
    const searchName= e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  searchName() {
    axios.get(`${process.env.REACT_APP_WS_URL}/employee?name=${this.state.searchName}`)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const {employee, searchName} = this.state;
    // const filteredEmployee = employee.filter(employee =>
    //   employee.name.toLowerCase().includes(searchField.toLowerCase())
    //   );

    return (
      <div>
        <Navigation />
      
      <div className="col-lg">
        

          <div className="col-md-8">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Employee Name"
                        value={searchName}
                        onChange={this.onChangeSearchName}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={this.searchName}
                        >
                          Search
                        </button>
                      </div>
                    </div>
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
                        {employee.map((employee, index) => ( 
                          
                        <tbody key={index}>
                              <tr>  
                                <td><img 
                                  src={"http://" + employee.image}
                                  alt="new"
                                  /></td>
                                <td>{employee.name}</td> 
                                <td>{employee.address}</td> 
                                <td>{employee.phone_number}</td> 
                                <td><Link to={"/employee/" + employee.id} >View Profile</Link></td>
                                <td>
                                  <Popup trigger={<button className="badge"> 
                                    Generate</button>}>
                                    <div style={{textAlign: "center",}}>
                                      <h3>{employee.name}</h3>
                                      <div><QRCode value={employee.qrId}/></div>
                                    </div>
                                  </Popup>
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
      </div>
    );
  }
}
