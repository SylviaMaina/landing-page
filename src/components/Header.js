import React from 'react'
import logo from "../images/logo.svg"
import header from '.././images/desktop/header.jpg'
import arrow from '.././images/icon-arrow-down.svg'
function Header(){
    return( 
        <nav>
         <div className="create">
         <img src={header}  className="banner" alt="header.."/>
         <p>We are creatives</p>
         </div>
         <div className="arrow">
        <img src={arrow} alt="arrow"/>
        </div>
        <img src={logo}alt="" className="logo"/>
        <ul class="nav justify-content-end">
        <li class="nav-item">
          <button class="nav-link active" href="about">About</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" href="info">Services</button>
        </li>
        <li clbuttonss="nav-item">
          <button class="nav-link" href="pics">Projects</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" href="footer">Contacts</button>
        </li>
      </ul>
      </nav>
    )

}

export default Header