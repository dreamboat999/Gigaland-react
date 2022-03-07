import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa'

import './Header.scss'

type Props = {
  headerType?: string
}
const Header = (props: Props) => {
  const { headerType } = props
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <header className={headerType}>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <img src='/images/logo.png' alt='logo' />
            AlgoChess
          </Link>
          <input
            type='search'
            name='search-box'
            id='search-box'
            placeholder='search item here...'
          />
        </div>
        <nav className='main-menu'>
          <ul>
            <li>
              <Link to='/'>
                Home
                <span className='underline'></span>
              </Link>
            </li>
            <li>
              <span className='sub-title'>
                Explore
                <span className='underline'></span>
              </span>
              <FaAngleDown />
              <ul className='sub-menu'>
                <li>
                  <Link to='/explore-music-nft'>Music NFT</Link>
                </li>
                <li>
                  <Link to='/counters'>Counters</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/help'>
                Help
                <span className='underline'></span>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                Contact
                <span className='underline'></span>
              </Link>
            </li>
          </ul>
          <button className='btn-main'>Connect Wallet</button>
        </nav>
        <nav
          className={`mobile-menu-wrap ${menuOpened && 'opened'}`}
          onClick={toggleMenu}
        >
          <span className='cls'></span>
          <span>
            <ul className='mobile-menu'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/explore-music-nft'>Music NFT</NavLink>
              </li>
              <li>
                <NavLink to='/help'>Help</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
          </span>
          <span className='cls'></span>
        </nav>
      </div>
    </header>
  )
}

export default Header
