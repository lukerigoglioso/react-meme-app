import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: ""
    };
  }

  callAPI() {
    fetch("http://localhost:9000/memes")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: JSON.stringify(res)}));
  }
  componentWillMount() {
    this.callAPI();
  }
  render() {
      var obj = this.state.apiResponse ;
      //
      //
      if (obj === "") {
          console.log("api response is null")
      } else {
          debugger;
          var jsonParse = JSON.parse(obj) ;
          console.log(JSON.parse(obj));
      }



    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">{this.state.apiResponse}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
