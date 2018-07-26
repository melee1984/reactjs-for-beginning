import React, { Component } from 'react';
import { Button, Alert } from 'react-bootstrap';
import './App.css';
import Request from 'superagent';

class App extends Component {

  loadProductData() {

      var url = "http://www.omdbapi.com/?i=tt3896198&apikey=56ef85ff&s=star&y=&r=json&lot=short";
      
      Request.get(url).then((data) => {
        this.setState({
            productData: data.body.Search,
            total: data.body.totalResults
          });
      });

  }
  getInitialState()  {
    return {
      productData: [],  
      url: '/api/products'
    }
  }
  componentWillMount() {
      console.log('1');
      this.loadProductData();
  }

  componentDidMount() {
    console.log('2');
  }

  render() {

    return (
      <div className="App">
        <div className="col-md-12">
          
            <Alert bsStyle="warning">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
            good.
          </Alert>
        </div>
      </div>

    );
  }
}

export default App;
