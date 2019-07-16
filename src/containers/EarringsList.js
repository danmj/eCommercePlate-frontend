import React from 'react';
import ProductCard from '../components/ProductCard.js';

const EarringsList = (props) => {

  const makeProductCard = () => {
    return props.productsData.map((product) => {
      if (product.type_id === 3) {
        return <ProductCard key={product.id} product={product} detailClickHandler={props.detailClickHandler} />
      }
    })
  }

  return(
    <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'row wrap', backgroundColor: '#eeeeee' }}>
      {makeProductCard()}
    </div>
  )
}

export default EarringsList
