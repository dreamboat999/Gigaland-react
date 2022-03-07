import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.scss'
import 'styles/styles.scss'

import Homepage from './pages/Homepage/Homepage'
import Contact from 'pages/Contact/Contact'
import MusicNFT from 'pages/MusicNFT/MusicNFT'
import Counters from 'pages/Counters/Counters'
import Help from 'pages/Help/Help'

const App = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', '#ee446e')
    document.documentElement.style.setProperty('--primary-color-rgb', '238, 68, 110')
    document.documentElement.style.setProperty('--secondary-color', '#fe81c6')
    document.documentElement.style.setProperty('--secondary-color-rgb', '254, 129, 198')

    window.addEventListener('scroll', onScroll)
  }, [])

  const onScroll = (event: any) => {
    let scrollTop = window.pageYOffset
    
    if (scrollTop > 0) {
      document.getElementsByTagName('header').item(0)?.classList.add('has-background')
    } else {
      document.getElementsByTagName('header').item(0)?.classList.remove('has-background')
    }
  }

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/explore-music-nft' element={<MusicNFT />} />
      <Route path='/counters' element={<Counters />} />
      <Route path='/help' element={<Help />} />
    </Routes>
  )
}

export default App
