import React from 'react';
import ProductCard from '../components/ProductCard.js';

const AllProductsList = (props) => {

  const makeProductCard = () => {
    return props.productsData.map((product) =>
      <ProductCard key={product.id} product={product} detailClickHandler={props.detailClickHandler} />
    )
  }

  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexFlow: 'row wrap', backgroundColor: '#eeeeee'}}>
      {makeProductCard()}
    </div>

  )
}

export default AllProductsList
