import React from 'react'
import SearchIcon from '../Buttons/SearchIcon'
import FilterButton from '../Buttons/FilterButton'
import AddButton from '../Buttons/AddButton'

const UserHeader = () => {
  return (
    <>
    <style>
        {`
          .my-input-search {
            border-bottom: 3px solid #fff;
            transition: border 0.3s ease;
          }

          .my-input-search:focus-within {
            border-bottom: 3px solid green;
          }
        `}
      </style>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: 'fit content',
      gap:'3px',
      paddingBottom:'10px'
    }}>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
       
      }}>
        <div
          style={{
            fontSize:'22px'
          }}
          >
          <strong>Chats</strong>
        </div>
        <div style={{
          display:'flex',
          gap:'10px'
        }}>
         <AddButton/>
        <FilterButton/>
        </div>
      </div>


      <div style={{
        display: 'flex',
    
        gap: '20px',
        padding:'0 0px 0 10px',
        alignItems:'center',
        backgroundColor:'rgb(85 85 85)',
        color:'#ffff',
        borderRadius:'5px',
      }}
      className='my-input-search'
      >
        <SearchIcon/>
        <MyInput/>   
      </div>


    </div>
      </>
  )
}




function MyInput({placeholder="Search or start a new chat"}) {
  return (
    <>
      <style>
        {`
          input::placeholder {
            color: #ffff;
          }
        `}
      </style>
      <input type='text'
          placeholder={placeholder}
          style={{
            flex:'1',
            padding:'10px 0px',
            border:'none',
            outline:'none',
            backgroundColor:'transparent',
            color:'inherit',
            fontSize:'16px'
          }}/>
    </>
  );
}


export default UserHeader;
export {MyInput}
