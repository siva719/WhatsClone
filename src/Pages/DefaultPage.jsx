import React from 'react'
import Users from '../Components/Users'
import Default from '../Components/Default'
import WhatsAppLogo from '../Components/WhatsAppLogo'

const DefaultPage = () => {
  return (
    <div style={{
      display: 'flex',
      backgroundColor:'#3c3a3a'
    }}>
      <Users/>
      <Default/>
    </div>
  )
}


export default DefaultPage
