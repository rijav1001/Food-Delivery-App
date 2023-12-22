import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import { useEffect } from 'react';
import BannerName from './Components/BannerName';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import { MenuItems, Items } from './Components/Data'

function App() {

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
  }, [])

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
                  <div key={data.id}>
                    <MenuCard imgSrc={data.imgSrc} name={data.name} isActive = {data.id === 1 ? true : false} />
                  </div>
                ))}
              </div>
              <div className='dishItemContainer'></div>
            </div>
        </div>
        <div className='rightMenu'></div>
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
