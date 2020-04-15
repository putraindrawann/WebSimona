import React, { Component } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  
import { Redirect } from "react-router-dom";
import Navigation from "../Nav";
import "../../App.css";

export default class Addemployee extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            qrId: '', 
            nfcId: '', 
            gender: '', 
            blood_type: '', 
            // image: `https://randomuser.me/api/portraits/lego/${this.imageloop}.jpg`,
            image: '',
            phone_number:'',
            address:'',
            birth_place:'',
            birth_date:'',
            identity:'',
            distant_relative:'',
            place:'',
            siteName:'',
            departement:'',
            position:''
        };
    
      }
    
  imageloop() {
    Math.floor(Math.random() * 10);
  }

  Insertemployee = (e) => {  
    e.preventDefault(); 
    axios.post(`${process.env.REACT_APP_WS_URL}/employee`, this.state)
            .then(() => this.setState(() => ({
                toDashboard: true
            })))
			.catch(error => {
				console.log(error)
			})  
  };  

  onChange = (e) => {  
    e.persist(); 
    this.setState({[e.target.name]: e.target.value});  
  }  

  Clear = () => { 
    this.setState({
        name: '', 
        qrId: '', 
        nfcId: '', 
        gender: '', 
        blood_type: '', 
        image: '',
        phone_number:'',
        address:'',
        birth_place:'',
        birth_date:'',
        identity:'',
        distant_relative:'',
        place:'',
        siteName:'',
        departement:'',
        position:''

    });
  }
  
  render() {
    const { name, qrId, nfcId,gender,blood_type,phone_number,address,birth_place,birth_date,identity , 
        distant_relative, place, siteName, departement, position } = this.state

    if (this.state.toDashboard === true) {
        return <Redirect to='/employee' />
      }

  return (  
    <div>

    
    <Navigation />

    <div className="app flex-row align-items-center">  
      <Container>  
        <Row className="justify-content-center">  
          <Col md="12" lg="10" xl="8">  
            <Card className="mx-4">  
              <CardBody className="p-4">  
                <Form onSubmit={this.Insertemployee}>  
                  <h1>Add Employee</h1>
                  
                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="Name" name="name" value={name} required onChange={ this.onChange }  />  
                  </InputGroup> 

                   <InputGroup className="mb-3"> 
                    <Input type="text" placeholder="QrId" name="qrId" value={qrId} required onChange={ this.onChange }/>  
                  </InputGroup>  

                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="NfcId" name="nfcId" value={nfcId} onChange={ this.onChange }  />  
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <select className="custom-select" name="gender" value={gender} onChange={ this.onChange }>
                        <option >Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <select className="custom-select" name="blood_type" value={blood_type} onChange={ this.onChange }>
                        <option>Choose Blood Type</option>
                        <option value="O">O</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                    </select>
                  </InputGroup> 

                  <InputGroup className="mb-4">
                     <Input type="number" placeholder="Phone" name="phone_number" value={phone_number} onChange={ this.onChange } />  
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <Input type="text" placeholder="Address" name="address" value={address} onChange={ this.onChange }  />  
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <Input type="text" placeholder="Birth Place" name="birth_place" value={birth_place} onChange={ this.onChange }  />  
                  </InputGroup>   

                  <InputGroup className="mb-4">
                    <Input type="date" placeholder="Birth Date" name="birth_date" value={birth_date} onChange={ this.onChange }  />  
                  </InputGroup> 
 
                  <InputGroup className="mb-4">
                    <select className="custom-select" name="identity" value={identity} onChange={ this.onChange }>
                        <option >Choose Identity</option>
                        <option value="Simper">Simper</option>
                        <option value="ID Card">ID Card</option>
                    </select>
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <select className="custom-select" name="departement" value={departement} onChange={ this.onChange }>
                        <option >Choose Departement</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                        <option value="Human Resource">Human Resource</option>
                        <option value="SCM">Supply Chain Management</option>
                    </select>
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <select className="custom-select" name="position" value={position} onChange={ this.onChange }>
                        <option >Choose Position</option>
                        <option value="Staff">Staff</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Manager">Manager</option>
                    </select>
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <Input type="text" placeholder="Distant Relative" name="distant_relative" value={distant_relative} onChange={ this.onChange }  />  
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <select className="custom-select" name="place" value={place} onChange={ this.onChange }>
                        <option >Choose Place</option>
                        <option value="Mine A">Mine A</option>
                        <option value="Mine B">Mine B</option>
                        <option value="Mine C">Mine C</option>
                        <option value="Mine D">Mine D</option>
                        <option value="Mine R">Mine E</option>
                    </select>
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <select className="custom-select" name="siteName" value={siteName} onChange={ this.onChange }>
                        <option >Choose Site Name</option>
                        <option value="berau1">Berau Coal Kaltim Site A</option>
                        <option value="berau2">Berau Coal Kaltim Site B</option>
                        <option value="berau3">Berau Coal Kaltim Site C</option>
                        <option value="berau4">Berau Coal Kaltim Site D</option>
                        <option value="berau5">Berau Coal Kaltim Site E</option>
                    </select>
                  </InputGroup> 

             <CardFooter className="p-4">  
                <Row>  
                  <Col xs="12" sm="4">  
                    <Button type="submit" className="button-form" block><span>Save</span></Button>  
                  </Col>
                  <Col xs="12" sm="4">  
                    <Button name="Clear" onClick={this.Clear} className="button-form" block><span>Clear</span></Button>  
                  </Col> 
                  <Col xs="12" sm="4">  
                    <Button  className="button-form" block><span>Cancel</span></Button>  
                  </Col>  
                </Row>  
              </CardFooter>  
                </Form>  
              </CardBody>  
            </Card>  
          </Col>  
        </Row>  
      </Container>  
    </div> 
    </div>  
    )
    
  } 
}  
