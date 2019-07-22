import React, { Component } from 'react';
import ProductCard from '../components/ProductCard.js';
import ProductView from '../components/ProductView.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productAction.js';

class NecklacesList extends Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  renderDiv = () => {
    if(typeof(this.props.clicked) === "object") {
      return <ProductView />
    }
    else{
      return this.props.products.map((product) => {
        if (product.type_id === 1) {
          return <ProductCard key={product.id} product={product} />
        }
      })
    }
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
  fetchProducts: PropTypes.func.isRequired,
  Products: PropTypes.array.isRequired,
  clicked: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  products: state.products.items,
  clicked: state.click.clickedCard,
})

export default connect(mapStateToProps, {fetchProducts})(NecklacesList)
