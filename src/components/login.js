import React, { Component } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  


class Login extends Component {  
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
    axios.post(`${process.env.REACT_APP_WS_URL}/auth`,admin)
    .then((response) =>
        { 
            let userresponse = response;
            console.log(userresponse.data);
            if(userresponse){
            sessionStorage.setItem('data',JSON.stringify(userresponse));
            // kolom ini buat isi token
            this.props.history.push({pathname: '/home'});
            }
            
        },this)
        .catch((error) => alert(error))
      }
    }


    render (){

        return (
            <div className="app flex-row align-items-center">  
            <Container>  
              <div>
                
              </div>
              <Row className="justify-content-center">
                <img src={require("../assets/smmlogo.png")} alt="images" width="150" height="150"/>
              </Row>
              <br/>
      
              <Row className="justify-content-center">  
                <Col md="6" lg="2" xl="5">  
                  <Card className="mx-4">  
                    <CardBody className="p-4">  
                      <Form ref="formdemo" onSubmit={this.handleSubmit}>  
                        <h1>Login Simona Web</h1>
                        <br/>
      
                        <InputGroup className="mb-3">
                          <Input type="text" name="user_name" onChange={this.handleChange} placeholder="Username" />
                        </InputGroup> 
      
                        <InputGroup className="mb-3">
                          <Input type="password" name="password" onChange={this.handleChange} placeholder="Password" />
                        </InputGroup> 

                      <Row className="justify-content-center">   
                        <Col xs="12" sm="4">  
                          <Button type="submit" className="button-form" block><span>Submit</span></Button>  
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

export default Login;