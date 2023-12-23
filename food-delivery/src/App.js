import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import { useEffect, useState } from 'react';
import BannerName from './Components/BannerName';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import { MenuItems, Items } from './Components/Data'
import ItemCard from './Components/ItemCard';
import DebitCard from './Components/DebitCard';
import CartItem from './Components/CartItem';

function App() {

  // Main dish state
  const [isMainData, setMainData] = useState(
    Items.filter(ele => ele.itemId === 'burger01')
  )

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li')
    
    function setMenuActive() {
      menuLi.forEach(i => i.classList.remove('active'))
      this.classList.add('active')
    }

    menuLi.forEach(i => i.addEventListener('click', setMenuActive))

    // menu card active toggle
    const menuCard = document
    .querySelector('.rowContainer')
    .querySelectorAll('.rowMenuCard')

    function setMenuCardActive() {
      menuCard.forEach(i => i.classList.remove('active'))
      this.classList.add('active')
    }

    menuCard.forEach(i => i.addEventListener('click', setMenuCardActive))
  }, [isMainData])

  // set main dish items on filter
  const setData = (itemId) => {
    setMainData(Items.filter(ele => ele.itemId === itemId))
  }

  return (
    <div className="App">
      {/* Header section */}
      <Header />

      {/* Main container */}
      <main>
        <div className='mainContainer'>
          <div className='banner'>
            <BannerName name={'Rijav'} discount={'149/-'} link={'#'} />
            <img src={'/images/delivery-man.png'} alt='' className='deliveryPic' />
          </div>

            {/* dish container */}
            <div className='dishContainer'>
              <div className='menuCard'>
                <SubMenuContainer name={'Menu Category'} />
              </div>
              <div className='rowContainer'>
                {MenuItems && MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard imgSrc={data.imgSrc} name={data.name} isActive={data.id === 1 ? true : false} />
                  </div>
                ))}
              </div>

              <div className='dishItemContainer'>
                {isMainData && isMainData.map((data) => (
                    <ItemCard 
                    key={data.id}
                    itemId={data.itemId}
                    imgSrc={data.imgSrc} name={data.name} ratings={data.ratings} 
                    price={data.price} />
                  ))}
              </div>
            </div>
        </div>
        <div className='rightMenu'>
          <div className='debitCardContainer'>
            <div className='debitCard'>
              <DebitCard />
            </div>
          </div>

          <div className='cartCheckoutContainer'>
            <SubMenuContainer name={'Cart Items'} />
            <div className='cartContainer'>
              <div className='cartItems'>
                <CartItem 
                  name={'Burger Bistro'}
                  imgSrc={'/images/burger-food.jpg'}
                  price={'149/-'}
                />
              </div>
            </div>

            <div className='totalSection'>
              <h3>Total</h3>
              <p>
                <span>₹ </span>480/-
              </p>
            </div>

            <button className='checkout'>Check Out</button>
          </div>
        </div>
      </main>

      {/* Bottom menu */}
      <div className='bottomMenu'>
        <ul id='menu'>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<HomeRounded />} isHome />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Chat />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<SummarizeRounded />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Settings />} />

          <div className='indicator'></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
