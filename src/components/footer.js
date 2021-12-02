import React from 'react'
import logo from "../images/logo.svg"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.svg"
import facebook from "../images/facebook.svg"
import pinterest from "../images/pinterest.svg"
function Footer(){
    return(
        <>
<div className="footer">
<div className="logof">
    <img src={logo}alt=""/>
</div>

<div className="foot">
     <button>About</button>
     <button>Services</button>
     <button>Projects</button>
</div>

<div className="socials">

<a href="https://twitter.com"><img src={twitter} class="rounded " alt="..."style={{width:"50px", height:"50px"}}/></a>
<a href="https://www.instagram.com/"><img src={instagram} class="rounded " alt="..." style={{width:"50px", height:"50px"}}/></a>
<a href="https://facebook.com"><img src={facebook} class="rounded " alt="..." style={{width:"50px", height:"50px"}}/></a>
<a href="https://pinterest.com"><img src={pinterest} class="rounded " alt="..." style={{width:"50px", height:"50px"}}/></a>
</div>
</div>
</>
    )
}
export default Footer