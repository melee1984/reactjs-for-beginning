import React, { Component } from 'react';
import PropTypes            from 'prop-types'


const propTypes = {
    title: PropTypes.string
}

const defaultProps = {
  name: "Welcome Default Props"
}

class ProductList extends Component {

  constructor (props) {
    super(props);
    this.state = {
        productFields: null
    }; 
 
  }
 
  componentWillMount() {
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

  productFields(productFields) {
    this.setState({productFields: productFields});
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  render() {
        
        return (

                <div className="col-sm-3 col-md-3 product-display">
                    <div className="panel-heading">
                      {this.props.productFields.title}
                    </div>
                    <img src={this.props.productFields.poster} className="img-thumbnail"  alt="Image" style={{width: '80%'}}/>
                    <div className="panel-footer">{this.props.productFields.Type}</div>
                </div>
        )
  }
}

ProductList.propTypes = propTypes;

export default ProductList;
