
import { Link } from 'react-router-dom';

const UserItem = ({user}) => {
    return (
        <Link to={'/'+user.id} style={{textDecoration:'none'}}>
        <style>
            {
                `
                    .profile-card:hover{
                        background-color:#595959;
                    }
                `
            }
        </style>
        <div style={{
            display:'flex',
            padding:'10px 10px',
            gap:'10px',
            borderRadius:'5px',
            // backgroundColor:'red'
        }} className='profile-card'
        >
            <div>
                <img
                    src={user.profile}
                    alt='Image not found'
                    height='50px'
                    width='50px'
                    style={{
                        borderRadius:'50%',
                        objectFit:'contain'
                    }}
                />
            </div>
            <div>
                <div style={{color:'#fff'}}>
                    <strong>{user.name}</strong>
                </div>
                {
                    user.lastMessage && 
                    <div style={{color:'grey',fontSize:'14px'}}>
                        <i>{user.lastMessage}</i>
                    </div>
                }
            </div>
        </div>
                    </Link>
    )
}

export default UserItem
