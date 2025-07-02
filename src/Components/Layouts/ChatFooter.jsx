
import AttachButton from '../Buttons/AttachButton'
import Emoji from '../Buttons/Emoji'
import MicroPhoneButton from '../Buttons/MicroPhoneButton'
import { MyInput } from './UserHeader'

const ChatFooter = () => {
  return (
    <div style={{
       display:'flex',
       backgroundColor:'rgb(78 86 78)',
       alignItems:'center',
       padding:'10px 20px 10px 0px'
    }}>
      <Emoji />
      <AttachButton/>
      <MyInput placeholder='Type a message' />
      <MicroPhoneButton/>
    </div>
  )
}

export default ChatFooter
