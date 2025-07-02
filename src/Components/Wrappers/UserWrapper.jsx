
import UserItem from '../Items/UserItem';

import users from '../../data/users';

const UserWrapper = () => {
  return (
    <div style={{
      color: 'black',
      padding:'10px 0px',
      height:'600px',
      overflow:'auto'
    }}>
      {
        users.map((item,index)=><UserItem  user={item} key={index}/>)
      }
    </div>
  )
}

export default UserWrapper
