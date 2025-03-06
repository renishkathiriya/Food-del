import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {

  const { cartItems, food_list, removefromCart } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {

          return (
            <>
              {cartItems[item._id] > 0 && (
                <div className='cart-items-title cart-items-item' key={item + 1}>
                  <img src={item.image} alt="item_image" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price*cartItems[item._id]}</p>
                  <p>x</p>
                </div>
              )}
            </>
          )

        })}
      </div>
    </div>
  )
}

export default Cart
