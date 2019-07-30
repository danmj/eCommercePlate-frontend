// This is the 'All Products' page, that displays a list of all products in
// the database, no matter the type_id.
import React, { Component } from 'react';
import ProductCard from '../components/ProductCard.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AllProductsList extends Component {

  // Displaying all products from the backend database
  renderDiv = () => {
    return this.props.products.map((product) =>
      <ProductCard key={product.id} product={product} />
    )
  }

  render() {
    return(
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexFlow: 'row wrap', backgroundColor: '#eeeeee'}}>
        {this.renderDiv()}
      </div>
    )
  }
}

AllProductsList.propTypes = {
  products: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  products: state.products.items,
})

export default connect(mapStateToProps, {})(AllProductsList)
