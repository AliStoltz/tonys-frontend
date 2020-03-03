import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import PurchaseProduct from '../../components/PurchaseProduct/PurchaseProduct';

class ProductDetailsContainer extends Component {
  state = {
    detail: {},
    user: {},
    purchase: false,
    purchaseModalOpen: false,
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/products/${this.props.match.params.id}`)
    .then((res) => {
      this.setState({
        detail: res.data.data,
        user: res.data.data.user
      })
      console.log(res.data.data.user)
    })
    .catch((error) => console.log(error));
  }


  handlePurchaseModalOpen = () => {
    this.setState((prevState) => {
      return{
        purchaseModalOpen: !prevState.purchaseModalOpen,
        purchase: !prevState.purchase,
      }
    })
  }

  handlePurchaseCancel = () => {
    this.handlePurchaseModalOpen();
  }

  render() {
    return(
      <>
      <div className="detial-image">
        <img src={this.state.detail.photo}></img>
      </div>
      <div className="detail-info">
        <h3>{this.state.detail.name}</h3>
        <br/>
        <p id="price">${this.state.detail.price}.00</p>
        <br/>
        <p><em>Current Condition:</em> {this.state.detail.condition}</p>
        <br/>
        <p><em>Description:</em> {this.state.detail.description}</p>
        <p>posted by: {this.state.user.username}</p>
        <br/>
        <Button id="addCart" name="add-guitar" onClick={() => this.handlePurchaseModalOpen()} variant="outline-light">Add To Cart</Button>
      </div>
      <PurchaseGuitar purchaseModalOpen={this.state.purchaseModalOpen} handlePurchaseModalOpen={this.handlePurchaseModalOpen} handlePurchaseCancel={this.handlePurchaseCancel} handlePurchase={this.props.handlePurchase}
       />
      </>
    )
  }
};

export default withRouter(ProductDetailsContainer);