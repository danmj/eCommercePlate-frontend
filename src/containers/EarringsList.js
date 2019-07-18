import React, { Component } from 'react'
import ProductCard from '../components/ProductCard.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productAction.js';

class EarringsList extends Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  makeProductCard = () => {
    return this.props.products.map((product) => {
      if (product.type_id === 3) {
        return <ProductCard key={product.id} product={product} detailClickHandler={this.props.detailClickHandler} />
      }
    })
  }

  render() {
    return(
      <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'row wrap', backgroundColor: '#eeeeee' }}>
        {this.makeProductCard()}
      </div>
    )
  }
}

EarringsList.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  Products: PropTypes.array.isRequired,
}

const mapStateToprops = state => ({
  products: state.products.items,
})

export default connect(mapStateToprops, {fetchProducts})(EarringsList)
