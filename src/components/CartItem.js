// CartItem is each individual row in the shopping cart.
// Each row corresponds to a product, holding it's image, name, price and quantity.
import React from 'react';

const CartItem = (props) => {

  // Reads the clicking of the 'delete' icon.
  const removeItem = (obj) => {
    props.removeItem(props.cartObj)
  }

  return(
    <tr>
      <th scope="row" className="border-0">
        <div className="p-2">
          <img src={props.cartObj.photo} alt="cart" width="70" className="img-fluid rounded shadow-sm" />
          <div className="ml-3 d-inline-block align-middle">
            <h5 className="mb-0"> <a href={`/product/${props.cartObj.product_id - 1}`} className="text-dark d-inline-block align-middle">{props.cartObj.name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">{props.cartObj.type_id}</span>
          </div>
        </div>
      </th>
      <td className="border-0 align-middle"><strong>{(props.cartObj.price).toFixed(2)}</strong></td>
      <td className="border-0 align-middle"><strong>{props.cartObj.quantity}</strong></td>
      <td className="border-0 align-middle"><a href="#!" className="text-dark"><i className="far fa-trash-alt" onClick={() => removeItem()}></i></a></td>
    </tr>
  )
}

export default CartItem
