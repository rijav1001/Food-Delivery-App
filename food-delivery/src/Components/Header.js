import React from 'react'
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'

function Header() {
  return (
    <header>
        <img src='app-logo.jpg' alt='' className='logo' /> 

        <div className='inputBox'>
            <SearchRounded />
            <input type='text' placeholder='Search' />
        </div>

        <div className='shoppingCart'>
            <ShoppingCartRounded className='cart' />
            <div className='cart_content'>
                <p>2</p>
            </div>
        </div>

        <div className='profileContainer'>
            <div className='imgBox'>
                <img src='profile-pic.jpg' alt='' className='profilePic' />
            </div>

            <h2 className='userName'>Rijav</h2>
        </div>
            
        <div className='toggleMenu'>
            <BarChart className='toggleIcon' />
        </div>
    </header>
  )
}

export default Header