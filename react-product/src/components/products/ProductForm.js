import React, { Component } from 'react';
import PropTypes  from 'prop-types'

const propTypes = {
    title: PropTypes.string
}

const defaultProps = {
  name: "Welcome Default Props"
}

class Products extends Component {

  constructor (props) {
    super(props);
  }

  getInitialState()  {
   
  }

  componentWillMount() {
    this.loadProductData();

    console.log('will mount');
  }

  componentDidMount(){
    console.log('did Mount');
  }

  componentWillUpdate(nextProps, nextState) {
     console.log('ComponentWillUpdate');
  }

  omponentDidUpdate(prevProps, prevState) {
      console.log('omponentDidUpdate');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  render() {

    return (
       <div>Product Form</div>


    );

  }
}

Products.propTypes = propTypes;
Products.defaultProps = defaultProps;

export default Products;
