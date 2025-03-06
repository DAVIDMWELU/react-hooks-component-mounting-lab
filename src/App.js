import React, { Component } from "react";
import Timer from "./Timer";

class App extends Component {
  state = {
    timerIDs: []
  };

  componentDidMount() {
    this.addTimer();
  }

  addTimer = () => {
    this.setState((prevState) => ({
      timerIDs: [...prevState.timerIDs, Date.now()]
    }));
  };

  removeTimer = (id) => {
    this.setState((prevState) => ({
      timerIDs: prevState.timerIDs.filter((timerId) => timerId !== id)
    }));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.addTimer}>Add Timer</button>
        <div className="TimerGrid">
          {this.state.timerIDs.map((id) => (
            <Timer key={id} id={id} removeTimer={this.removeTimer} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;