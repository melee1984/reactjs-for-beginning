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
            <div>

                <div className="col-sm-4 col-md-4">
                  <div className="panel panel-primary">
                    <div className="panel-heading">{this.props.productFields.title}</div>
                    <div className="panel-body"><img src={this.props.productFields.poster} className="img-responsive"  alt="Image"/></div>
                    <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                  </div>
                </div>

             </div>
        )
  }
}

ProductList.propTypes = propTypes;

export default ProductList;
