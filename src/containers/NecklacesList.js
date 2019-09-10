// This is the 'Necklaces' page on the website that displays all products
// with a type_id of 1.
import React, { Component } from 'react';
import ProductCard from '../components/ProductCard.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class NecklacesList extends Component {

  /* Displaying only necklaces from the backend database, that is, only
  products with a type_id of 1. */
  renderDiv = () => {
    return this.props.products
      .filter(product => product.type_id === 1)
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

NecklacesList.propTypes = {
  Products: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  products: state.products.items,
})

export default connect(mapStateToProps, { })(NecklacesList)
