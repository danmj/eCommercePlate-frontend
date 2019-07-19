import React, { Component } from 'react';
import CartItem from './CartItem.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCart, getQuantity, deleteCartitem } from '../actions/cartitemAction.js';

class Cart extends Component {

  componentDidMount() {
    this.props.fetchCart()
    this.props.getQuantity()
  }

  removeItem = (obj) => {
    this.props.deleteCartitem(obj)
  }

  createCartItem = () => {
    if(this.props.cart.length > 0) {
      return this.props.cart.map((cartObj) =>
        <CartItem key={cartObj.id} cartObj={cartObj} removeItem={this.removeItem} />
      )
    }
    else {
      return <h5 style={{ padding: '38px' }}>You have no items in your shopping cart</h5>
    }
  }

  render() {
    return(
      <div className="px-4 px-lg-0">
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5" style={{ marginTop: '50px' }}>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">Product</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Quantity</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>

                      {/* cart items here (table rows) */}
                      {this.createCartItem()}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* ITEMS LIST SECTION ENDS HERE */}


            {/* CHECKOUT SECTION STARTS HERE */}
            <div className="row py-5 p-4 bg-white rounded shadow-sm">
              <div className="col-lg-6">
              </div>
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                <div className="p-4">
                  <p className="font-italic mb-4">Shipping and additional costs are calculated based on your subtotal.</p>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>${(this.props.sum).toFixed(2)}</strong></li>
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>${(this.props.sum * 0.1).toFixed(2)}</strong></li>
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>${(this.props.sum * 0.04).toFixed(2)}</strong></li>
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                      <h5 className="font-weight-bold">${(parseFloat((this.props.sum).toFixed(2)) + parseFloat((this.props.sum * 0.1).toFixed(2)) + parseFloat((this.props.sum * 0.02).toFixed(2))).toFixed(2)}</h5>
                    </li>
                  </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
  fetchCart: PropTypes.func.isRequired,
  getQuantity: PropTypes.func.isRequired,
  deleteCartitem: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  sum: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  cart: state.cart.userCart,
  sum: state.cart.total,
})

export default connect(mapStateToProps, {fetchCart, getQuantity, deleteCartitem})(Cart)
