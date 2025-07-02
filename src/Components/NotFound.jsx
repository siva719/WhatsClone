import React from 'react'
import WhatsAppLogo from './WhatsAppLogo'

const NotFound = () => {
  return (
    <div style={{
      flex: '1',
      backgroundColor:'red',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      backgroundColor:'#3c3a3a',
      color:'white',
    }}>
      <div style={{
        color:'rgb(178, 166, 166)',
        display:'flex',
        flexDirection:'column',
        gap:'2px',
        alignItems:'center',
        fontSize:'40px'
      }}>
        <p >Page Not Found</p>
        
      </div>
      <WhatsAppLogo fontSize='30px' size='50px' />
      
    </div>
  )
}

export default NotFound
