import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li')
    
    function setMenuActive() {
      menuLi.forEach(i => i.classList.remove('active'))
      this.classList.add('active')
    }

    menuLi.forEach(i => i.addEventListener('click', setMenuActive))
  }, [])

  return (
    <div className="App">
      {/* Header section */}
      <Header />

      {/* Main container */}
      {/* <main>
        <div className='mainContainer'></div>
        <div className='rightMenu'></div>
      </main> */}

      {/* Bottom menu */}
      <div className='bottomMenu'>
        <ul id='menu'>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<HomeRounded />} />
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
