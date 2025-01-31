import React from 'react'
import "./Layout.css"
import Sidenav from '../Sidenav/Sidenav'
import Aboutme from '../Pages/About me/Aboutme'
import Goal from '../Pages/Future plans/Goal'
import Skills from '../Pages/Skills/Skills'

export default function Layout() {
  return (
    <div className='layout'>
      <Sidenav />
      <Aboutme />
      <Goal />
      <Skills />
    </div>
  )
}
