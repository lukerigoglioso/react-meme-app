import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: []};
    this.setterFunction = this.setterFunction.bind(this);


  }
  callAPI() {

    var setterFunction = this.setterFunction;
    var dataUrlArray = [];
    axios.get('https://www.reddit.com/r/meme/new/.json')
    .then(function (response) {
      // handle success
      console.log(response);
      var temp = response;
      console.log(temp)
      var childArray = temp.data.data.children;
      console.log(childArray)
      var jsonResponse = childArray ;
      for (var option in jsonResponse) {
        dataUrlArray[option] = {key: option, data: jsonResponse[option].data.url};
      }
      console.log(dataUrlArray);

      var left = dataUrlArray.slice(0,12) ;
      console.log(left);
      var right = dataUrlArray.slice(13);
      console.log(right);
      var arrayObj = [];
      for (var i = 0; i < left.length ; i++) {
        console.log(left[i]);
        arrayObj.push({key: i, data: left[i].data, key2: i, data2: right[i].data})
      }
      console.log(arrayObj);
      setterFunction(arrayObj);
    });
  }
  setterFunction(responseUrlArray){
    this.setState({ apiResponse: responseUrlArray })
  }
  componentWillMount() {
    this.callAPI();
  }
  render() {
    var stateResponse = this.state.apiResponse;
    console.log(stateResponse);
    return (
      <div className="App">
        {stateResponse.map((url) => (
          <List component="nav" className="app">
            <ListItem >
              <img
                style={{width: 350, height: 350}}
                src={url.data} />
            </ListItem>
            <Divider light/>
            <ListItem>
              <img
                style={{width: 350, height: 350}}
                src={url.data2} />
            </ListItem>
            <Divider light/>
          </List>
        ))}
      </div>
    );
  }
}
export default App;
