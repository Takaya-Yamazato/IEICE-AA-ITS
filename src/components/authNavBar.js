import React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from '../services/auth'

export default function AuthNavBar() {
  let greetingMessage = ''
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`
  } else {
    greetingMessage = 'You are not logged in'
  }
  return (
    <div
      style={{
        display: 'flex',
        flex: '1',
        justifyContent: 'space-between',
        borderBottom: '1px solid #d1c1e0',
      }}
    >
      <span>&nbsp;&nbsp;&nbsp;&nbsp;{greetingMessage}</span>
      {/* <nav>
        <Link to="/xplore/Migration-of-EB-and-ComEX-to-IEEE-Xplore/">Xplore</Link>
        {` `}
      </nav> */}
    </div>
  )
}
