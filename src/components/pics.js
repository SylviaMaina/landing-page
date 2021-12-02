import React from 'react'
import milk from '../images/desktop/milkbottles.jpg'
import orange from '../images/desktop/orange.jpg'
import cone from '../images/desktop/cone.jpg'
import sugar from '../images/desktop/sugarcubes.jpg'

function Pics(){
    return(
        <div style={{alignItems:"center"}}>
<img src={milk} class="rounded " alt="..."style={{width:"400px", height:"550px",padding:"none"}}/>
<img src={orange} class="rounded " alt="..." style={{width:"400px", height:"550px",padding:"none"}}/>
<img src={cone} class="rounded " alt="..." style={{width:"400px", height:"550px",padding:"none"}}/>
<img src={sugar} class="rounded " alt="..." style={{width:"400px", height:"550px",marginLeft:"1200px",marginTop:"-580px"}}/>
</div>
    )
}


export default Pics