
import Users from '../Components/Users'
import { useParams } from 'react-router-dom'
import Chat from '../Components/Chat';
import NotFound from '../Components/NotFound';
import users from '../data/users';
import { useEffect, useState } from 'react';



const ChatPage = () => {
  const {id} = useParams();

  const [user,setUser]=useState(null)

  const fun=()=>{
    users.forEach((item)=>{
      if(id==item.id){
        setUser(item)
      }
    })
  }

  useEffect(fun,[id]);


  return (
    <div style={{
      display: 'flex',
      backgroundColor:'#3c3a3a'
    }}>

      <Users/>
      {
        user==null ? <NotFound/>:<Chat id={id} user={user}/>
      }
      
    </div>
  )
}


export default ChatPage;
