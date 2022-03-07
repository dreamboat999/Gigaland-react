import React from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children: React.ReactNode
  headerType?: string
}

const MainLayout = (props: Props) => {
  const { children, headerType } = props

  return (
    <>
      <Header headerType={headerType} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
