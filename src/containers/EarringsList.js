// This is the 'Earrings' page on the website that displays all products
// with a type_id of 3.
import React, { Component } from 'react';
import ProductCard from '../components/ProductCard.js';
import ProductView from '../components/ProductView.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class EarringsList extends Component {

  // Displaying only earrings from the backend database, that is, only
  // products with a type_id of 3.
  renderDiv = () => {
    return this.props.products.map((product) => {
      if (product.type_id === 3) {
        return <ProductCard key={product.id} product={product} />
      }
      else {
        return null
      }
    })
  }

  render() {
    return(
      <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'row wrap', backgroundColor: '#eeeeee' }}>
        {this.renderDiv()}
      </div>
    )
  }
}

EarringsList.propTypes = {
  Products: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  products: state.products.items,
})

export default connect(mapStateToProps, {})(EarringsList)
