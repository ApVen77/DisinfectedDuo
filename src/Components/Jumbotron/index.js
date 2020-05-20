import React from 'react';
import { Jumbotron } from 'reactstrap';

function jumbotron(){
    return (

<Jumbotron fluid style={{ backgroundColor: "black", marginTop: "15px", height: "150%" }}>
                    <Container fluid>
                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/GJ0Fg_JfexyNlMSpTP6M4g/o.jpg" />
                        <p style={{ fontSize: "40px" }}>Welcome to The Disinfectant Divas</p>
                    </Container>
                </Jumbotron>
    )
}
                

export default jumbotron;