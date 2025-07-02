import React from 'react'

const MesageItem = ({message}) => {
  return (
    <div style={{display:'flex',
          justifyContent:message.isReceiver ?'flex-start': 'flex-end'}}>
      <div
        style={{
          backgroundColor:'rgb(75 75 75)',
          maxWidth:'fit-content',
          padding:'5px 20px',
          borderRadius:'5px',
          color:'#ffff',
        }}
        className={!message.isReceiver ? 'messge-con':'messge-con right'}
      >
        {
          message.message
        }
      </div>
    </div>
  )
}

export default MesageItem
