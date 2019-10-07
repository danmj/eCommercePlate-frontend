// ProductCard is the individual clickable product displayed within a list.
// Clicking on a ProductCard will take you to that product's view page.
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {

  return(
      <div className='product-card product-card-div'>
        <Link key={props.product.id} to={`/product/${props.product.id - 1}`}>
          <div className="card-body">
            <img className="product-card-image" alt='product card thumb' src={props.product.photos[1].url}/>
            <h6 className="product-card-text"><b>{props.product.name}</b>  ${parseFloat(props.product.price).toFixed(2)}</h6>
          </div>
        </Link>
      </div>
  )
}



export default ProductCard
