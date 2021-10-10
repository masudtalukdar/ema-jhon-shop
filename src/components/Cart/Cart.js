import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const { cart } = props;
  console.log(props.children);

  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <>
      <h3 className='cart-title'>Order Summary</h3>
      <h5 className='cart-iteams'>Iteams Ordered: {totalQuantity}</h5>
      <div className='cart-total'>
        <p>Items: ${total.toFixed(2)}</p>
        <p>Shipping: ${shipping}</p>
        <p>Estimated Tax: ${tax.toFixed(2)}</p>
        <p className='total'>Order Total: ${grandTotal.toFixed(2)}</p>
        {props.children}
      </div>
    </>
  );
};

export default Cart;
