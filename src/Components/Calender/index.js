import React, { Component } from 'react'
import "../Calender/calender.css";
import SimpleReactCalendar from 'simple-react-calendar'


class MyApp extends Component {
  render() {
    return <SimpleReactCalendar  activeMonth={new Date()} />
    
  }
}

export default MyApp; 