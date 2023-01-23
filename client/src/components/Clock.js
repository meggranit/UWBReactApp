import React from "react";
import './Clock.css';

class Clock extends React.Component {
    constructor(phoneData) {
      super(phoneData);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
    render() {
      return (
        <p className="App-clock display-time">
          Current time: {this.state.time}.
        </p>
      );
    }
  }
export default Clock;




