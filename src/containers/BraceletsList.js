import React, { Component } from 'react';
import ProductCard from '../components/ProductCard.js';
import ProductView from '../components/ProductView.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productAction.js';
import { clickCard } from '../actions/clickAction.js';

class BraceletsList extends Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  renderDiv = () => {
    if(typeof(this.props.clicked) === "object") {
      return <ProductView clickedProduct={this.props.clicked} />
    }
    else{
      return this.props.products.map((product) => {
        if (product.type_id === 2) {
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

BraceletsList.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  Products: PropTypes.array.isRequired,
  clickCard: PropTypes.func.isRequired,
  clicked: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  products: state.products.items,
  clicked: state.click.clickedCard,
})

export default connect(mapStateToProps, {fetchProducts, clickCard})(BraceletsList)
