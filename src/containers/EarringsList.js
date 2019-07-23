import React, { Component } from 'react';
import ProductCard from '../components/ProductCard.js';
import ProductView from '../components/ProductView.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class EarringsList extends Component {

  renderDiv = () => {
    return this.props.products.map((product) => {
      if (product.type_id === 3) {
        return <ProductCard key={product.id} product={product} />
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
