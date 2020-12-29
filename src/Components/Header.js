import React from 'react'
import logo from '../assets/logo.svg'
import './Header.css'

export default function Header() {
  return (
    <header className="headerContainer">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="titleContainer">
        <text>Page Title</text>
      </div>
    </header>
  )
}
