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
          <h1> Book Today!</h1>
          <Row>
            <Col md={6}>
              <Form />

            </Col>
          

          
            <Col md={6}>
              <Calender />
              <PopOver/>
              <button class="btn btn-primary startGame">"Start Game" </button>

            </Col>
          </Row>
        </Container>



      </>
    )
  }
}
export default contactus; 