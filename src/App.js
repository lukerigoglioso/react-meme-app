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

        // axios.get('http://localhost:9000/memes')
        axios.get('https://www.reddit.com/r/meme/new/.json')
            .then(function (response) {
                // handle success
                console.log(response);
                var temp = response;
                console.log(temp)
                var childArray = temp.data.data.children;
                console.log(childArray)
                // var urlArray = childArray.slice(0,childArray.length);
                var jsonResponse = childArray ;
                for (var option in jsonResponse) {
                    // console.log(response.data.urlArray[option].data.url);
                    // dataUrlArray[option] = response.data.urlArray[option].data.url;
                    dataUrlArray[option] = {key: option, data: jsonResponse[option].data.url};

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
                {this.state.apiResponse.map((url) => (
                    <Card key={url.key} >

                        <div>
                            <img
                                style={{width: 350, height: 350}}
                                src={url.data} />
                        </div>
                    </Card>

                ))}

            </div>
        );
    }
}

export default App;
