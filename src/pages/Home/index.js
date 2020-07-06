import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Navbar, Jumbotron } from 'reactstrap';
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";







class home extends Component {
  render() {
    return (

      <>

        <NavBar />
        <Header />
        <Container>
        <Row>
          <Col md="12">

            <Jumbotron>
              <a href="https://www.carrentals.com/blog/driving-with-germs-study/#:~:text=There%20are%20roughly%20700%20different,system%20to%20some%20serious%20dangers."> Look at What's Lurking in your Car according to <i>CarRentals</i></a>
              <br></br>
              <a href="ContactUs.html">FAQs</a>
            </Jumbotron>
          </Col>
        </Row>
        </Container>

      </>

    )
  }
}
export default home; 