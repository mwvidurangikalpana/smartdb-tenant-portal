import React, { ReactNode } from 'react'
import Navbar from './navbar/navbar'
import Header from './header/header'
import Footer from './footer/footer'

interface ILayoutProps {
  children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>

      <Header />
      <Navbar />
      <main style={{flexGrow: 1}}>
        {children}
      </main>
      {/* <Footer/> */}
      <Footer />
    </div>
  )
}

export default Layout
