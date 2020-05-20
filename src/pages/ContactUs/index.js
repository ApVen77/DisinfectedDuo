import React, { Component } from "react";
import NavBar from "../../Components/NavBar";
import { Navbar } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
import PopOver from "../../Components/PopOver";
import Calender from "../../Components/Calender"; 
import Form from "../../Components/Form";

// import "./email.scss";
// import axios from "axios";
// import { Email, Item, Span, A, Box, renderEmail } from "react-html-email"
// import { brotliDecompress } from "zlib";

import { FormGroup, Label, Input, Button } from 'reactstrap';







class contactus extends Component {
  render() {
    return (

      <>
        <NavBar />

        <Container>
          <h1>What's up?</h1>
          <Row>
            <Col md={4}>
              <Form />

            </Col>
          

          
            <Col md={8}>
              <Calender />
              <PopOver />

            </Col>
          </Row>
        </Container>



      </>
    )
  }
}
export default contactus; 