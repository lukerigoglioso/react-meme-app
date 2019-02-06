import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: []};
      this.setterFunction = this.setterFunction.bind(this);

  }

  callAPI() {
    // fetch("http://localhost:9000/memes")
    // .then(res => this.setState({ apiResponse: res }));

      var setterFunction = this.setterFunction;
      var dataUrlArray = [];

      axios.get('http://localhost:9000/memes')
          .then(function (response) {
              // handle success
             console.log(response.data.urlArray);
              for (var option in response.data.urlArray) {
                  // console.log(response.data.urlArray[option].data.url);
                  // dataUrlArray[option] = response.data.urlArray[option].data.url;
                  dataUrlArray[option] = {key: option, data: response.data.urlArray[option].data.url};

              }
              console.log(dataUrlArray)
              setterFunction(dataUrlArray);
          });

  }

  setterFunction(responseUrlArray){

      this.setState({ apiResponse: responseUrlArray })
  }


  componentWillMount() {
    this.callAPI();
  }

  render() {
      console.log(this.state.apiResponse);

    return (


      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {/*<p key={url.key} >{url.data}</p>*/}
            <div>
                {this.state.apiResponse.map((url) => (
                    <img src={url.data} alt="new" />
                ))}
            </div>);

        </header>
      </div>
    );
  }
}

export default App;
