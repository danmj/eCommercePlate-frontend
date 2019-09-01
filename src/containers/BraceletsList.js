// This is the 'Bracelets' page that displays a list of all products with
// a type_id of 2.
import React, { Component } from 'react';
import ProductCard from '../components/ProductCard.js';
import { connect } from 'react-redux';

class BraceletsList extends Component {

  // Displaying only bracelets from the backend database, that is, only
  // products with a type_id of 2.
  renderDiv = () => {
    return this.props.products
      .filter(product => product.type_id === 2)
      .map((product) => {
        return <ProductCard key={product.id} product={product} />
      })
  }

  render() {
    return(
      <div className="list-container">
        {this.renderDiv()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
})

export default connect(mapStateToProps, {})(BraceletsList)
