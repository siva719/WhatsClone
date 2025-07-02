import React, { useEffect, useState } from 'react'
import users from '../../data/users'

const ChatItem = ({user}) => {
  

  return (
    <div style={{
            display:'flex',
            padding:'10px 10px',
            gap:'10px',
            borderRadius:'5px',
            // backgroundColor:'red'
            alignItems:'center'
        }}
        >
                <img
                    src={user.profile}
                    alt='Image not found'
                    height='30px'
                    width='30px'
                    style={{
                        borderRadius:'50%',
                        objectFit:'cover'
                    }}
                />
                <strong style={{fontSize:'14px',color:'#fff'}}>{user.name}</strong> 
      </div>
  )
}

export default ChatItem
