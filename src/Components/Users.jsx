import React from 'react'
import UserHeader from './Layouts/UserHeader'
import UserWrapper from './Wrappers/UserWrapper'
import WhatsAppLogo from './WhatsAppLogo'

const Users = () => {
  return (
    <div style={{flex:'0 0 400px',display:'flex',flexDirection:'column'}}>

      <WhatsAppLogo />
      <div style={{ display: 'flex',flex:'1',height:'100%',overflow:'hidden' }}>
        <div style={{ flex: '0 0 30px' }}>
        </div>
        <div style={{
          display: 'flex',
          flex:'1',
          flexDirection: 'column',
          color: 'white',
          padding: '10px 0px'

        }}>

          <UserHeader />
          <UserWrapper />
        </div>
      </div>
    </div>
  )
}


export default Users
