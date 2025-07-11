

const AttachButton = ()=>{
    return <button style={{
        border:'0px',
        outline:'none',
        padding:'0px',
        backgroundColor:'transparent',
        padding:'6px 12px',
        
        color:'#ffff',
        borderTopLeftRadius:'8px',
        borderBottomLeftRadius:'8px',
        cursor:'pointer',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}>
        
        <svg  xmlns="http://www.w3.org/2000/svg" style={{transform:'rotate(-150deg)'}} width="20" height="20" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
        </svg>
    </button>

}

export default AttachButton;