// This is the 'Necklaces' page on the website that displays all products
// with a type_id of 1.
import React, { Component } from 'react';
import ProductCard from '../components/ProductCard.js';
import ProductView from '../components/ProductView.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class NecklacesList extends Component {

  // Displaying only necklaces from the backend database, that is, only
  // products with a type_id of 1.
  renderDiv = () => {
    return this.props.products.map((product) => {
      if (product.type_id === 1) {
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

NecklacesList.propTypes = {
  Products: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  products: state.products.items,
})

export default connect(mapStateToProps, {})(NecklacesList)
