'use client'
import React from 'react'
import { age, name } from './data.js'

const Cart = () => {
  console.log('age', age)
  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
        {age}
      </div>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  )
}

export default Cart

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}
