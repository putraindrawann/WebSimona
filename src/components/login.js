import React, { Component } from 'react'  
// import axios from 'axios';  
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  
// import { Redirect } from "react-router-dom";


export default class Login extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            user_name: '', 
            password: '', 
        };
    
      }



    render (){
        // const { user_name, password} = this.state;


        return (
            <div className="app flex-row align-items-center">  
            <Container>  
              <Row className="justify-content-center">  
                <Col md="12" lg="10" xl="8">  
                  <Card className="mx-4">  
                    <CardBody className="p-4">  
                      <Form>  
                        <h1>Login</h1>
      
                        <InputGroup className="mb-3">
                          <Input type="text" placeholder="Username" name="image"/>
                        </InputGroup> 
      
                        <InputGroup className="mb-3">
                          <Input type="password" placeholder="Password" name="name" />
                        </InputGroup> 

                    
                      <Row>  
                        <Col xs="12" sm="4">  
                          <Button type="submit" className="btn btn-info mb-1" block><span>Submit</span></Button>  
                        </Col> 
                      </Row>   
                      </Form>  
                    </CardBody>  
                  </Card>  
                </Col>  
              </Row>  
            </Container>  
          </div>  
        );
    } 
}