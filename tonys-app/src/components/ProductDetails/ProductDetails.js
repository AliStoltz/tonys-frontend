import React, { Component } from 'react';
import ProductDetailsContainer from '../../containers/ProductDetailsContainer/ProductDetailsContainer';

class ProductDetails extends Component {

  render() {
    return(
      <div className="details-container">
      <GuitarDetailsContainer handlePurchase={this.props.handlePurchase} />
    </div>
    )
  }
};

export default ProductDetails;