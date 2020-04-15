import React, { Component } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
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
            // photoUrl: null,
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

  handleImageChange = (e)=> {
    const dataImage = e.target.files[0];
    this.setState({
      photoUrl: dataImage
    })
};

  Clear = () => { 
    this.setState({
        name: '', 
        qrId: '', 
        nfcId: '', 
        gender: '', 
        blood_type: '',
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
    const { name, qrId, nfcId,gender,photoUrl, blood_type,phone_number,address,birth_place,birth_date,identity , 
        distant_relative, place, siteName, departement, position } = this.state

    if (this.state.toDashboard === true) {
        return <Redirect to='/employee' />
      }

  return (  
    <div>
    <Navigation />
    <br/>
    <div className="app flex-row align-items-center">  
      <Container>  
        <Row className="justify-content-center">  
          <Col md="12" lg="10" xl="8">  
            <Card className="mx-4">  
              <CardBody className="p-4">  
                <Form onSubmit={this.Insertemployee}>  
                  <h1>Add Employee</h1>
                  <br/>
                  {/* <InputGroup className="mb-3">
                    <Input type='file' placeholder='Photo Url'  name="photoUrl" value={photoUrl} id="photoUrl" required onChange={this.handleImageChange}  />  
                  </InputGroup>  */}

                  <label>Name</label>
                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="Banu" name="name" value={name} required onChange={ this.onChange }  />  
                  </InputGroup> 

                  <label>QR Id</label>
                   <InputGroup className="mb-3"> 
                    <Input type="text" placeholder="Q60000000" name="qrId" value={qrId} required onChange={ this.onChange }/>  
                  </InputGroup>  

                  <label>NFC Id</label>
                  <InputGroup className="mb-3">
                    <Input type="text"  placeholder="N60000000" name="nfcId" value={nfcId} required onChange={ this.onChange }  />  
                  </InputGroup> 

                  <label>Gender</label>
                  <InputGroup className="mb-4" required>
                    <select className="custom-select" name="gender" value={gender}  onChange={ this.onChange }>
                        <option>Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                  </InputGroup> 

                  <label>Blood Type</label>
                  <InputGroup className="mb-4">
                    <select className="custom-select" name="blood_type" value={blood_type} required onChange={ this.onChange }>
                    <option>Choose Blood Type</option>
                        <option value="O">O</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                    </select>
                  </InputGroup> 

                  <label>Phone</label>
                  <InputGroup className="mb-4">
                     <Input type="number" placeholder="0877xxxxxxx" name="phone_number" value={phone_number} required onChange={ this.onChange } />  
                  </InputGroup> 

                  <label>Address</label>
                  <InputGroup className="mb-4">
                    <Input type="text" placeholder="example street" name="address" value={address} required onChange={ this.onChange }  />  
                  </InputGroup> 

                  <label>Birth Place</label>
                  <InputGroup className="mb-4">
                    <Input type="text" placeholder="Jakarta" name="birth_place" value={birth_place} required onChange={ this.onChange }  />  
                  </InputGroup>   

                  <label>Birth Date</label>
                  <InputGroup className="mb-4">
                    <Input type="date" name="birth_date" value={birth_date} required onChange={ this.onChange }  />  
                  </InputGroup> 
 
                  <label>Identity</label>
                  <InputGroup className="mb-4">
                    <select className="custom-select" name="identity" value={identity} required onChange={ this.onChange }>
                        <option>Choose Identity</option>
                        <option value="Simper">Simper</option>
                        <option value="ID Card">ID Card</option>
                    </select>
                  </InputGroup> 

                  <label>Departement</label>
                  <InputGroup className="mb-4">
                    <select className="custom-select" name="departement" value={departement} required onChange={ this.onChange }>
                      <option>Choose Departement</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                        <option value="Human Resource">Human Resource</option>
                        <option value="SCM">Supply Chain Management</option>
                    </select>
                  </InputGroup> 

                  <label>Position</label>
                  <InputGroup className="mb-4">
                    <select className="custom-select" name="position" value={position} required onChange={ this.onChange }>
                        <option>Choose Position</option>
                        <option value="Staff">Staff</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Manager">Manager</option>
                    </select>
                  </InputGroup> 

                  <label>Distant Relative *skip if doesnt have </label>
                  <InputGroup className="mb-4">
                    <Input type="text" name="distant_relative" placeholder="Banu" value={distant_relative} onChange={ this.onChange }  />  
                  </InputGroup> 

                  <label>Place</label>
                  <InputGroup className="mb-4">
                    <select className="custom-select" name="place" value={place} required onChange={ this.onChange }>
                        <option>Choose Place</option>
                        <option value="Mine A">Mine A</option>
                        <option value="Mine B">Mine B</option>
                        <option value="Mine C">Mine C</option>
                        <option value="Mine D">Mine D</option>
                        <option value="Mine R">Mine E</option>
                    </select>
                  </InputGroup> 

                  <label>Site</label>
                  <InputGroup className="mb-4">
                    <select className="custom-select" name="siteName" value={siteName} required onChange={ this.onChange }>
                        <option>Choose Site</option>
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
                  <Link to="/employee"><Button name="Cancel" className="button-form" block><span>Cancel</span></Button></Link>
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
