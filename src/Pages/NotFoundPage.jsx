import React from 'react'
import Users from '../Components/Users'
import NotFound from '../Components/NotFound'

const NotFoundPage = () => {
   return (
    <div style={{
      display: 'flex',
      backgroundColor:'#3c3a3a'
    }}>
      <Users/>
      <NotFound />
    </div>
  )
}

export default NotFoundPage
