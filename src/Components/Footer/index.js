import React from 'react';
import "../Footer/footer.css";
import { Redirect } from 'react-router-dom';





function footer() {
    return (
        <footer className="footer">
        {/* <h1> Check us out on:</h1> */}
            
            <p style= {{float: "right", marginTop: "110px"}}><a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
                <a href="https://www.google.com" class="fa fa-google"></a>
                <a href="https://www.linkedin.com" class="fa fa-linkedin"></a>
                <a href="https://www.youtube.com" class="fa fa-youtube"></a>
                <a href="https://www.instagram.com" class="fa fa-instagram"></a>
                </p>
        </footer>
    )
}

export default footer;


