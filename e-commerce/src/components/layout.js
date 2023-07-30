import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer.js'
import Header from './Header.js'

const layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />

    </>
  )
}

export default layout
