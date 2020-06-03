import React, { Component } from "react";
import NavBar from "../../Components/NavBar";
import PopOver from "../../Components/PopOver";
import Card from "../../Components/Card";
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import Todo from "../../Components/Todo";
import logo from "../../LOGO.png";





class checkOut extends Component {
  render() {
    return (

      <>
        <NavBar />
        <Jumbotron fluid style={{ backgroundColor: "tomato", marginTop: "5px", height: "10" }}>
          <Container fluid>
            <img style={{ height: 80, float: "right" }} src={logo} alt="LOGO" />
            <h1>Prices...</h1>
            <hr></hr>
          </Container>
        </Jumbotron>
        <Container>
          <Row>

            <Col md="6">
              <h2>We do one thing... Disinfect</h2>
              <h2>Standard Price...</h2>
              <img style={{ position: "sticky", opacity: 0.2, height: 550 }} src={logo} alt="logo" />
            </Col>

            <Col md="6">
              <h2 style={{
                fontSize: 95,
                border: "solid",
                borderColor: "black",
                borderRadius: 35,
                color: "red",
                textAlign: "center"
              }}>$39.99</h2>
            </Col>
          </Row>
          <Row>
            <Col md="12">
            </Col>
          </Row>
        </Container>
        <Jumbotron fluid style={{ backgroundColor: "tomato", marginTop: "5px", height: "100%" }}>
          <Container fluid>
            <Todo />
            <a id="standaloneRegistration_createNew" href="javascript:void(0);" role="button" class="btn btn-secondary pill formCard--button">Create an account</a>
          <Row>
            <Col md={6}>
            </Col>
          </Row>
          
          </Container>
        </Jumbotron>
        <Card />
      </>

    )
  }
}
export default checkOut; 