import React from 'react';
import ProductCard from '../components/ProductCard.js';

const NecklacesList = (props) => {

  const makeProductCard = () => {
    return props.productsData.map((product) => {
      if (product.type_id === 1) {
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

export default NecklacesList
