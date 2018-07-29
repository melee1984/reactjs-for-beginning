import React, { Component } from 'react';
import PropTypes  from 'prop-types'
import Request              from 'superagent';
import _                    from 'lodash';



import ProductList from '../../components/products/ProductList.js';



// const propTypes = {
//     title: PropTypes.string
// }

// const defaultProps = {
//   name: "Product "
// }

class Product extends Component {

  constructor () {
    super();
    this.state = {};
  }

  getInitialState()  {
    return {
      productData: [],  
      total: 0
    }
  }

  loadProductData() {

      var url = "http://www.omdbapi.com/?i=tt3896198&apikey=56ef85ff&s=star&y=&r=json&lot=short";
      Request.get(url).then((data) => {
        this.setState({
            productData: data.body.Search,
            total: data.body.totalResults
          });
      });
  }
  
   componentWillMount() {

    this.loadProductData();

    console.log('will mount');
  }


  render() {

    var movies = _.map(this.state.productData, (movie) => {
       
          var productFields = {
              poster: movie.Poster,
              title: movie.Title,
              type: movie.Type,
              Year: movie.Year
            }

          return(
              <ProductList key={productFields.title} productFields={productFields} />
            )

      });


      return (

        <div>
           <div className="container">    
              {movies}
           </div>
        </div>

      );

  }
}

// Product.propTypes = propTypes;
// Product.defaultProps = defaultProps;

export default Product;
