import React, { useEffect, useState } from 'react'
import ChatHeader from '../Components/Layouts/ChatHeader'
import ChatFooter from './Layouts/ChatFooter'
import MessagesWrapper from './Wrappers/MessagesWrapper'
import messages from '../data/messages'

const Chat = ({id,user}) => {

  const [userMessages,setUserMessages] = useState([]);

  useEffect(()=>{
    let temp = [];
    messages.forEach(tempMsgs=>{
      if(tempMsgs.userId==id){
        temp = tempMsgs.messages;
      }
    });
    setUserMessages(temp)
  },[id])
  
  return (
    <div style={{
      flex: '1',
      display:'flex',
      flexDirection:'column'
    }}>
      <ChatHeader user={user}/>
      <MessagesWrapper messages={userMessages}/>
      <ChatFooter />
    </div>
  )
}

export default Chat
