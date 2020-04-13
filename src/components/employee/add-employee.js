import React, { Component } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  
import { Redirect } from "react-router-dom";

export default class Addemployee extends Component {  
    constructor(props) {
        super(props);
        this.state = {
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
            place:''
            // SiteMasterId:''
        };
    
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

  cancelCourse = () => { 
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
        place:''
    });
  }
  
  render() {
    const { name, qrId, nfcId,gender,blood_type,image,phone_number,address,birth_place,birth_date,identity , distant_relative, place } = this.state

    if (this.state.toDashboard === true) {
        return <Redirect to='/employee/all' />
      }

  return (  
    <div className="app flex-row align-items-center">  
      <Container>  
        <Row className="justify-content-center">  
          <Col md="12" lg="10" xl="8">  
            <Card className="mx-4">  
              <CardBody className="p-4">  
                <Form onSubmit={this.Insertemployee}>  
                  <h1>Add Employee</h1>

                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="Photos" name="image" value={image} onChange={ this.onChange }  />  
                  </InputGroup> 

                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="Name" name="name" value={name} onChange={ this.onChange }  />  
                  </InputGroup> 

                   <InputGroup className="mb-3"> 
                    <Input type="text" placeholder="QrId" name="qrId" value={qrId} onChange={ this.onChange }/>  
                  </InputGroup>  

                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="NfcId" name="nfcId" value={nfcId} onChange={ this.onChange }  />  
                  </InputGroup> 

                  <InputGroup  sm={2} className="mb-4">
                    {/* <Input type="text" placeholder="Gender" name="gender" value={gender} onChange={ this.onChange }  />   */}
                    
                    <select class="custom-select" name="gender" value={gender} onChange={ this.onChange }>
                        <option selected>Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <Input type="text" placeholder="Blood Type" name="blood_type" value={blood_type} onChange={ this.onChange } />  
                  </InputGroup> 

                  <InputGroup className="mb-4">
                     <Input type="text" placeholder="Phone" name="phone_number" value={phone_number} onChange={ this.onChange } />  
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <Input type="text" placeholder="Address" name="address" value={address} onChange={ this.onChange }  />  
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <Input type="text" placeholder="Birth Place" name="birth_place" value={birth_place} onChange={ this.onChange }  />  
                  </InputGroup>   

                  <InputGroup className="mb-4">
                    <Input type="text" placeholder="Birth Date" name="birth_date" value={birth_date} onChange={ this.onChange }  />  
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <Input type="text" placeholder="Identity" name="identity" value={identity} onChange={ this.onChange }  />  
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <Input type="text" placeholder="Distant Relative" name="distant_relative" value={distant_relative} onChange={ this.onChange }  />  
                  </InputGroup> 

                  <InputGroup className="mb-4">
                    <Input type="text" placeholder="Place" name="place" value={place} onChange={ this.onChange }  />  
                  </InputGroup>   

                  {/* <InputGroup className="mb-4">
                    <Input type="text" placeholder="Site" name="SiteMasterId" value={SiteMasterId} onChange={ this.onChange }  />  
                  </InputGroup>  */}

             <CardFooter className="p-4">  
                <Row>  
                  <Col xs="12" sm="4">  
                    <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>  
                  </Col>
                  <Col xs="12" sm="4">  
                    <Button name="cancelCourse" onClick={this.cancelCourse} className="btn btn-info mb-1" block><span>Clear</span></Button>  
                  </Col> 
                  <Col xs="12" sm="4">  
                    <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>  
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
    ) 
  } 
}  
