import React, { Component } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  
import { Redirect } from "react-router-dom";


export default class Login extends Component {  
      constructor(props){
        super(props);
        this.state = {
          user_name : '' ,
          password : '',
          redirectToReferrer : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(event){
            this.setState({
                [event.target.name] : event.target.value
                
            });
    }
    handleSubmit(event){
            event.preventDefault();

            const admin = {
            user_name : this.state.user_name,
            password : this.state.password
            };
            
      if(this.state.user_name && this.state.password)      
        {
    axios.post(`http://localhost:3000/auth`,admin)
    .then((response) =>
        { 
            let userresponse = response;
            console.log(userresponse.data);
            if(userresponse){
            sessionStorage.setItem('data',JSON.stringify(userresponse));
            this.setState({redirectToReferrer: true});
            }
            
        },this)
        .catch((error) => alert(error))
                  
    }
    }



    render (){
        // const { user_name, password} = this.state;
        if (this.state.redirectToReferrer === true){
        
          return (<Redirect to={'/employee/all'}/>)
          }
          if (sessionStorage.getItem('data')){
          
              return (<Redirect to={'/employee/all'}/>)
              }


        return (
            <div className="app flex-row align-items-center">  
            <Container>  
              <Row className="justify-content-center">  
                <Col md="12" lg="10" xl="8">  
                  <Card className="mx-4">  
                    <CardBody className="p-4">  
                      <Form ref="formdemo" onSubmit={this.handleSubmit}>  
                        <h1>Login</h1>
      
                        <InputGroup className="mb-3">
                          <Input type="text" name="user_name" onChange={this.handleChange} placeholder="Username" />
                        </InputGroup> 
      
                        <InputGroup className="mb-3">
                          <Input type="password" name="password" onChange={this.handleChange} placeholder="Password" />
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