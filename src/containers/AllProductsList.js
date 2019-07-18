import React, { Component } from 'react'
import ProductCard from '../components/ProductCard.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productAction.js';

class AllProductsList extends Component {


  componentDidMount() {
    this.props.fetchProducts()
  }

  makeProductCard = () => {
    return this.props.products.map((product) =>
      <ProductCard key={product.id} product={product} detailClickHandler={this.props.detailClickHandler} />
    )
  }

  render() {
    return(
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexFlow: 'row wrap', backgroundColor: '#eeeeee'}}>
        {this.makeProductCard()}
      </div>

    )
  }
}

AllProductsList.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
}

const mapStateToprops = state => ({
  products: state.products.items,
})

export default connect(mapStateToprops, {fetchProducts})(AllProductsList)
