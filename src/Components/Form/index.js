
import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import "./form.css";

// var myButton = document.getElementsByClassName ("Button")

function myButton() { 
  var name= "April";
  alert('Welcome, ', name);

}

// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};

//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }



const Example = (props) => {
  
  return (
    <Container>
      <Row>
        <Col md={6}>


          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress2">Address 2</Label>
              <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input type="text" name="city" id="exampleCity" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input type="text" name="state" id="exampleState" />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input type="text" name="zip" id="exampleZip" />
                </FormGroup>
              </Col>
            </Row>
            
            <div className= "Button">
              <Button onClick= {myButton} style={{marginTop: 15}}>Check us Out!</Button>
              </div>
          </Form>
        </Col>
      </Row>
      
      </Container>
      
  );
}



export default Example;



