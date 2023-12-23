import React, { useEffect } from 'react'
import { MenuOutlined, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'

function Header() {

    useEffect(() => {
        const toggleMenu = document.querySelector('.toggleMenu')

        toggleMenu.addEventListener('click', () => {
            document.querySelector('.rightMenu').classList.toggle('active')
        })
    }, [])

  return (
    <header>
        <img src={'/images/app-logo.jpg'} alt='' className='logo' /> 

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
                <img src={'/images/profile-pic.jpg'} alt='' className='profilePic' />
            </div>

            <h2 className='userName'>Rijav</h2>
        </div>
            
        <div className='toggleMenu'>
            <MenuOutlined className='toggleIcon' />
        </div>
    </header>
  )
}

export default Header