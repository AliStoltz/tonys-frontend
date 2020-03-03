import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-bootstrap/Modal';

class PurchaseProduct extends Component {
  state = {
    addToCart: false,
  };

  handleModalYes = () => {
    this.props.handlePurchase();
    this.props.handlePurchaseCancle();
  }

  render() {
    return(
      <Modal show={this.props.purchaseModalOpen} onHide={this.props.handlePurchaseModalOpen}>
      <Modal.Header closeButton>
        <Modal.Title>Add to cart?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <button onClick={this.props.handlePurchaseCancel} type="button" className="btn btn-light">Cancel</button>
        <button onClick={this.handleModalYes} type="button" className="btn btn-light">Yes</button>
      </Modal.Body>
    </Modal>
    )
  }
};

export default withRouter(PurchaseProduct);