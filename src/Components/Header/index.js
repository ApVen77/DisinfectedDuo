import React from 'react';
import '../Header/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import logo from "../../LOGO.png";




function head() {
    const firstName = "April"
    const lastName = "Long"
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()



    return (
        <div>

            <Container>
                <h1 style={{ float: "right", fontFamily: "Lobster, cursive" }}>It is currently {date.getHours() % 12} :  {date.getMinutes()} </h1>
                <Jumbotron fluid style={{ backgroundColor: "rgb(248, 235, 164)", marginTop: "5px", height: "150%" }}>
                    <Container fluid>
                        <img style={{ height: 450 }} src={logo} alt="LOGO" />
                        <hr></hr>
                        <p style={{ fontSize: "40px", color: "tomato", fontFamily: "Lobster, cursive" }}>Welcome to The Disinfectant Duos</p>
                        <p style={{ fontSize: "40px", color: "tomato", fontFamily: "Lobster, cursive" }}>We aren't Cleaners</p>
                        <p style={{ fontSize: "40px", color: "tomato", fontFamily: "Lobster, cursive" }}>We are <strong>Disinfectors</strong></p>
                        <p style={{ fontSize: "40px", color: "tomato", fontFamily: "Lobster, cursive" }}>Where we knock the germs out!</p>
                    </Container>
                </Jumbotron>
            </Container>









            <Container style={{ backgroundColor: "orange " }}>
                <Row>
                    <Col md="4">
                    <h2>Fogger</h2>
                        <img style={{ width: "370px", height: "300px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "25px" }} src="https://cdn.shopify.com/s/files/1/0361/9438/6056/products/inspire-uplift-car-high-pressure-cleaning-tool-american-connector-car-high-pressure-cleaning-tool-3996347138147_1200x.progressive_371abb5b-9bef-440b-a8fd-2b8faf81321a_360x.jpg?v=1585175230" />
                        <p> We use the top of the line chemicals to fogg out germs from your vehicle.</p>
                        <ul style={{ listStyleType: "circle" }}>
                            <li> Over 140 degrees Farenheight &#10004; </li>
                            <li>Fogger sprays a Clean mist &#10004; </li>
                            <li> over 140 degrees Farenheight &#10004; </li>
                            <li> over 140 degrees Farenheight &#10004; </li>
                        </ul>
                    </Col>

                    <Col md="4">
                        <h2>Hand Cleaning</h2>
                        <img style={{ width: "370px", height: "300px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "25px" }} src="https://cleanfax.com/wp-content/uploads/2016/09/auto-detailing-image.jpg" />
                        <p>What the chemical can't get, we get by hand. Making sure not to miss any surfaces.</p>
                        <ul style={{ listStyleType: "circle" }}>
                            <li> Over 140 degrees Farenheight &#10004; </li>
                            <li>Fogger sprays a Clean mist &#10004; </li>
                            <li> over 140 degrees Farenheight &#10004; </li>
                            <li> over 140 degrees Farenheight &#10004; </li>
                        </ul>
                    </Col>


                    <Col md="4">
                        <h2>Touched Surfaces</h2>
                        <img style={{ width: "370px", height: "300px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgkXUATvchAhBiGBA972La0uB0PT3WbMqRHDVWpkhxBCd-Gyqv&usqp=CAU" />
                        <p>Over 20 different surfaces in your car are touched daily by you. We get all those areas. </p>
                        <ul style={{ listStyleType: "circle" }}>
                            <li> Over 140 degrees Farenheight &#10004; </li>
                            <li>Fogger sprays a Clean mist &#10004; </li>
                            <li> over 140 degrees Farenheight &#10004; </li>
                            <li> over 140 degrees Farenheight &#10004; </li>
                        </ul>
                    </Col>
                    <hr></hr>
                </Row>


                <Col md="12">
                    <Jumbotron fluid style={{ backgroundColor: "white", marginTop: "20px", height: "150%" }}>
                        <Container fluid>
                            <p style={{ fontSize: "40px" }}>With   The Disinfectant Divas</p>
                            <ul style={{ listStyleType: "square" }}>
                                <li> We Come to You! &#127968; &#127970; </li>
                                <li>Fogger sprays a Clean mist &#10004; </li>
                                <li> over 140 degrees Farenheight &#10004; </li>
                                <li> over 140 degrees Farenheight &#10004; </li>
                            </ul>
                            <hr></hr>
                        </Container>
                    </Jumbotron>
                </Col>

                <Row>
                    <Col md="3">
                        <img style={{ width: "270px", height: "200px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "100px" }} src="https://previews.123rf.com/images/valentint/valentint1408/valentint140801325/31120474-call-now-icon-internet-button-on-white-background-.jpg" />
                        <h2>Call Today: 555-8745</h2>
                    </Col>

                    <Col md="3">
                        <img style={{ width: "270px", height: "250px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "100px" }} src="https://previews.123rf.com/images/pratyaksa/pratyaksa1612/pratyaksa161200005/69045785-gold-certified-sticker-or-emblem-.jpg" />

                    </Col>

                    <Col md="3">
                        <img style={{ width: "220px", height: "200px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "100px" }} src="https://s3.amazonaws.com/slipcalimgs/ogImage/yoncrwg5ku.png" />

                    </Col>

                    <Col md="3">
                        <img style={{ width: "220px", height: "200px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "100px" }} src="https://s3.amazonaws.com/slipcalimgs/ogImage/yoncrwg5ku.png" />

                    </Col>
                </Row>

            </Container>

        </div>


    )
}
export default head;