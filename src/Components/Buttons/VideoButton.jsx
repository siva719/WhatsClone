import React from 'react'

const VideoButton = () => {
  return (
      <button style={{
        border:'0px',
        outline:'none',
        padding:'0px',
        backgroundColor:'transparent',
        border:'1px solid #4e4e4e',
        padding:'6px 12px',
        
        backgroundColor:'#4e4e4e',
        color:'#ffff',
        borderTopLeftRadius:'8px',
        borderBottomLeftRadius:'8px',
        cursor:'pointer',
        width:'45px',
        height:'45px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#ffff" class="bi bi-camera-video" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
        </svg>
      </button>
  )
}

export default VideoButton
