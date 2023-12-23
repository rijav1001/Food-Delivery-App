import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React, { useState } from 'react'

function CartItem({ name, imgSrc, price }) {
    
  return (
    <div className='cartItem'>
        <div className='imgBox'>
            <img src={imgSrc} alt='' />
        </div>
        <div className='itemSection'>
            <h2 className='itemName'>{name}</h2>
            <div className='itemQuantity'>
                <span>x {qty}</span>
                <div className='quantity'>
                    <RemoveRounded className='itemRemoved' />
                    <AddRounded className='itemAdded' />
                </div>
            </div>
        </div>
        <p className='itemPrice'>
            <span className='rupeeSign'>₹ </span>
            <span className='itemPriceValue'>{price}</span>
        </p>
    </div>
  )
}

export default CartItem