import React from 'react'
import ChatItem from '../Items/ChatItem'
import AudioButton from '../Buttons/AudioButton'
import VideoButton from '../Buttons/VideoButton'
import SearchButton from '../Buttons/SearchButton'

const ChatHeader = ({user}) => {
  return (
    <div style={{
      display:'flex',
      justifyContent:'space-between',
      backgroundColor:'rgb(78 86 78)',
      alignItems:'center',
      padding:'10px 20px 10px 0px'
    }}>
      
      <div >
        <ChatItem user={user}/>
      </div>
      <div style={{
        display:'flex',
        gap:'20px',
        alignItems:'center',
        borderRadius:'2px'
      }}>
        <div style={{
          display:'flex'
        }}>
          <VideoButton />
          <AudioButton/>
        </div>
        <SearchButton />
      </div>
    </div>
  )
}



export default ChatHeader

