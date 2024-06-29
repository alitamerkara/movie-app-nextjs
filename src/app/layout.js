"use client"
import React, {useState} from 'react'
import './globals.css'
import Header from "../components/Header"


const Layout = ({children}) => {
  const [theme,setTheme]= useState(true)
  return (
    <html lang='en'>
        <body className={theme ? "bg-black text-white" : null}>
        <Header theme={theme} setTheme={setTheme}/>
        {children}
        </body>
    </html>
  )
}

export default Layout