import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent = () => {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <h1>Error: {this.state.errorMessage}</h1>;
    }

    return <Spinner message="Please allow location access" />;
  };

  render() {
    return <div className="main-container">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
