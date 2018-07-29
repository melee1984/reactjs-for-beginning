import React, { Component } from 'react';
import { Button, Alert } from 'react-bootstrap';
import Product from './components/products/Product.js';

import './App.css';

class App extends Component {
  
  
  componentWillMount() {
      console.log('1');
  }

  componentDidMount() {
    console.log('2');
  }

  render() {

    return (
      <div className="App">

        <div className="jumbotron">
          <div className="container text-center">
            <h1>Online Store</h1>      
            <p>Mission, Vission & Values</p>
          </div>
        </div>

        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <a className="navbar-brand" href="#">Logo</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">Stores</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span> Your Account</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <Product />


      <div className="container-fluid text-center">
        <p>Online Store Copyright</p>  
        <form className="form-inline">Get deals:
          <input type="email" className="form-control" size="50" placeholder="Email Address" />
          <button type="button" className="btn btn-danger">Sign Up</button>
        </form>
      </div>

      
      </div>

       

    );
  }
}

export default App;
