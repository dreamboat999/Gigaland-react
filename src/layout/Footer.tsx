import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaRss, FaLongArrowAltRight } from "react-icons/fa";

import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className='container main-footer-container'>
        <div>
          <h5>Explore NFTs</h5>
          <ul>
            <li>
              <Link to='/'>All NFTs</Link>
            </li>
            <li>
              <Link to='/'>King</Link>
            </li>
            <li>
              <Link to='/'>Queen</Link>
            </li>
            <li>
              <Link to='/'>Knight</Link>
            </li>
            <li>
              <Link to='/'>Bishop</Link>
            </li>
            <li>
              <Link to='/'>Rook</Link>
            </li>
            <li>
              <Link to='/'>Pawn</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5>Marketplace</h5>
          <ul>
            <li>
              <Link to='/'>Wallet Connect</Link>
            </li>
            <li>
              <Link to='/'>Add Your NFTs</Link>
            </li>
            <li>
              <Link to='/'>Sell Your NFTs</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5>About Us</h5>
          <ul>
            <li>
              <Link to='/'>Community</Link>
            </li>
            <li>
              <Link to='/'>Partners</Link>
            </li>
            <li>
              <Link to='/'>News</Link>
            </li>
            <li>
              <Link to='/'>Team</Link>
            </li>
            <li>
              <Link to='/'>Help Center</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5>Newsletter</h5>
          <p>
            Signup for our newsletter and get free Chess tokens along with the
            latest news in your inbox.
          </p>
          <form className='email-form'>
            <input type="text" name="email" id="email" placeholder='enter your email' />
            <button type="submit">
              <FaLongArrowAltRight />
            </button>
          </form>
          <small>Your email is safe with us. We don't spam.</small>
        </div>
      </div>
      <div className='sub-footer'>
        <div className='container footer-links'>
          <div>
            <Link to='/'>
              <img src='/images/logo.png' alt='logo' className='f-logo' />
              <span className='copy'>© Copyright 2021 - AlgoChess</span>
            </Link>
          </div>
          <div className='social-links'>
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
            <Link to="/">
              <FaLinkedinIn />
            </Link>
            <Link to="/">
              <FaPinterest />
            </Link>
            <Link to="/">
              <FaRss />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
