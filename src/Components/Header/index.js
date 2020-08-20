import React from 'react';
import '../Header/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import logo from "../../LOGO.png";
import fact1 from "../../fact1.png";
import fact2 from "../../fact2.png";



function head() {
    const firstName = "April"
    const lastName = "Long"
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = date.getTime();
    // const format = date.format();



    return (
        <div>

            <Container>
                <h1 style={{ float: "right", fontFamily: "Lobster, cursive" }}>It is currently {date.getHours() % 12} :  {date.getMinutes()} </h1>
                <Jumbotron fluid style={{ backgroundColor: "rgb(248, 235, 164)", marginTop: "5px", height: "150%", border: "solid rgb(250, 228, 105) 40px", borderRadius: "15px 50px"}}>
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





            <hr></hr>



            <Container style={{ backgroundColor: "gold " }}>
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
                        <img style={{ width: "355px", height: "300px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "25px", textOverflow: "hidden" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgkXUATvchAhBiGBA972La0uB0PT3WbMqRHDVWpkhxBCd-Gyqv&usqp=CAU" />
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

                <hr></hr>
                <Col md="12">
                    <Jumbotron fluid style={{ backgroundColor: "rgb(235, 183, 88)", marginTop: "20px", height: "150%"}}>
                        <Container fluid>
                            <p style={{ fontSize: "40px" }}>With   The Disinfectant Divas</p>
                            <ul style={{ listStyleType: "square" }}>
                                <li> We Come to You! &#127968; &#127970; </li>
                                <li>Fogger sprays a Clean mist &#10004; </li>
                                <li> Disinfectant temperatures that reach over 140 degrees Farenheight &#10004; </li>
                                <li> We Do Carseats! &#10004; </li>
                            </ul>
                            <hr></hr>
                        </Container>
                    </Jumbotron>
                </Col>
                <hr></hr>
                <Row>
                    <Col md="3">
                        <img style={{ width: "270px", height: "200px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "100px" }} src="https://previews.123rf.com/images/valentint/valentint1408/valentint140801325/31120474-call-now-icon-internet-button-on-white-background-.jpg" />
                        {/* <h2>Call Today: 555-8745</h2> */}
                    </Col>

                    <Col md="3">
                        <img style={{ width: "270px", height: "250px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "100px" }} src="https://previews.123rf.com/images/pratyaksa/pratyaksa1612/pratyaksa161200005/69045785-gold-certified-sticker-or-emblem-.jpg" />

                    </Col>

                    <Col md="3">
                        <img style={{ width: "220px", height: "200px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "100px" }} src="https://s3.amazonaws.com/slipcalimgs/ogImage/yoncrwg5ku.png" />

                    </Col>

                    <Col md="3">
                        <img style={{ width: "220px", height: "200px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "100px", textOverflow: "hidden" }} src="https://s3.amazonaws.com/slipcalimgs/ogImage/yoncrwg5ku.png" />

                    </Col>
                </Row>

            </Container>
            <br></br>
            <Container>
                <Row>
                    <Col md="12" >

                        <h2 style={{ float: "left", marginTop: "20px" }} >We Do Carseats! </h2>
                        <Jumbotron style={{ backgroundColor: "pink", border: "solid rgb(250, 228, 105) 20px" }}>
                            <img style={{ marginTop: "25px", width: "800px", height: "250px", marginLeft: "0px", marginBottom: "10px", opacity: 0.5, border: "solid rgb(250, 228, 105) 20px" }} src="https://images-na.ssl-images-amazon.com/images/I/610nKOXTuyL._AC_SL1052_.jpg" />
                        </Jumbotron>

                        <h2>Operate on the days that work for you...</h2>
                        <h3>Thursday-Sunday. Schedule us now!</h3>
                        <Jumbotron>
                            <img style={{ marginTop: "25px", width: "800px", height: "250px", marginLeft: "0px", marginBottom: "10px", opacity: 0.5, border: "solid rgb(250, 228, 105) 20px" }} src=" https://i0.wp.com/waywardinspiration.com/wp-content/uploads/2019/06/Days-of-the-Week-Correspondences-_-Wayward-Inspiration-Blog.png?fit=560%2C315&ssl=1" />
                        </Jumbotron>
                        <h2>From our family Care to yours. </h2>
                        <Jumbotron>
                            <img style={{ marginTop: "25px", width: "800px", height: "250px", marginLeft: "0px", marginBottom: "10px", opacity: 0.5, border: "solid rgb(250, 228, 105) 20px" }} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-cleaning-car-interior-royalty-free-image-1584446612.jpg?crop=1.00xw:0.752xh;0,0.0930xh&resize=1200:*" />
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Container>
                <Row>
                    <Col md="4">
                        <Jumbotron style={{ backgroundColor: "brown" }}>
                            <img style={{ width: "200px", height: "250px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "150px" }} src={fact1} alt="Image" />

                        </Jumbotron>
                    </Col>

                    <Col md="4">
                        <Jumbotron style={{ backgroundColor: "rgb(92, 17, 17)" }}>
                            <img style={{ width: "200px", height: "250px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "150px" }} src={fact1} alt="Image" />
                        </Jumbotron>
                    </Col>
                    <br></br>
                    <Col md="4">
                        <Jumbotron style={{ backgroundColor: "rgb(131, 32, 32)" }}>
                            <img style={{ width: "200px", height: "250px", position: "center", marginLeft: "0px", marginBottom: "20px", borderRadius: "150px" }} src={fact1} alt="Image" />
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}
export default head;