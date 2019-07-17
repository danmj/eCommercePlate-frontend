import React from 'react';

const CartItem = (props) => {

  const removeItem = (obj) => {
    props.removeItem(props.cartObj)
  }

  const parseQuantityValue = () => {
    return parseInt(props.quantityValue)
  }

  return(
    <tr>
      <th scope="row" className="border-0">
        <div className="p-2">
          {/* <img src={props.cartObj.photos[1].url} alt="cart image" width="70" className="img-fluid rounded shadow-sm" /> */}
          <div className="ml-3 d-inline-block align-middle">
            <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{props.cartObj.name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">{props.cartObj.type_id}</span>
          </div>
        </div>
      </th>
      <td className="border-0 align-middle"><strong>{(props.cartObj.price).toFixed(2)}</strong></td>
      <td className="border-0 align-middle"><a href="#" className="text-dark"><ion-icon name="trash" onClick={() => removeItem()}></ion-icon></a></td>
    </tr>
  )
}

export default CartItem
