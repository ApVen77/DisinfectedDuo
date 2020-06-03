import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/index";
import Footer from "./Components/Footer/index";
import Card from "./Components/Card/index";
import Todo from "./Components/Todo/index";
import Form from "./Components/Form/index";
import NavBar from "./Components/NavBar/index";
import { Button, Jumbotron } from 'reactstrap';
import ContactUs from "./pages/ContactUs";
import CheckitOut from "./pages/CheckitOut";
import Home from "./pages/Home/index";
// import Contactcard from "./Components/Contactcard/index";

import { injectGlobal } from 'styled-components';
import { Motion, spring } from 'react-motion';



import { render } from '@testing-library/react';

const AnimatedCard = props => {
  return (
    <Motion
      defaultStyle={{ scale: 0.5 }}
      style={{ scale: spring(1, { stiffness: 60, damping: 10 }) }}
    >
      {interpolatedStyle => <Card scale={interpolatedStyle.scale} {...props} />}
    </Motion>
  );
};
// injectGlobal `
// body {
//     margin: 0;
//     background: #fbfbfb;
// }
// `;
function App() {
  
  return (
    <> 
     
    <Router>
    <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/checkitout" component={CheckitOut} />
          {/* <Route exact path="/send-email" component={Email} />
          <Route component={NoMatch} /> */}
        </Switch>
        </Router>
       
      
     
      <Footer />
    </>
  );
}


export default App;
