import React from 'react'
import standout from '../images/desktop/standout.jpg'
import transform from '../images/desktop/transform.jpg'
import design from '../images/desktop/design.jpg'
import photography from '../images/desktop/photography.jpg'
function Info(){
    return(

        <div class="row">
        <div class="col" style={{width:"800px", height:"550px"}}> 
        <h1>Transform your brand</h1>
           <p>We are full-service creative agency specializing in
               helping brands grow fast. Engage your clients through
               compelling visuals that do most of the marketing for you.
           </p></div>
        <div class="col">
            <img src={transform} alt="cone"style={{width:"785px", height:"550px"}}/>
            </div>


        <div class="col">
            <img src={standout} alt="cone"style={{width:"785px", height:"550px"}}/>
            </div>
        <div class="col">  
        <h1>Stand out to the right audience</h1>
           <p>Using a collaborative formula of designers,
               researchefs, photographers, videographers and 
               copywriters, we'll build and extend your brand
               in digital places.
           </p>
           </div>

    <div>
    <img src={design} alt="cone..."style={{width:"800px", height:"550px"}}/>
    <div class="side"style={{marginRight:"800px",padding:"20px"}}>
        <h1>Graphic Design</h1>
        <p>
           Great design makes you memorable. We deliver artwork that
           underscores your brand message and captures potential
           clients' attention.
            </p> 
    </div>
         
            </div>
   <div >
    <img src={photography} alt="cone..."style={{width:"800px", height:"550px",marginLeft:"800px",marginTop:"-910px"}}/>
    <div class="side" style={{marginLeft:"800px",marginTop:"-200px",padding:"20px"}}>
        <h1>Photography</h1>
        <p>
           Increase your credibility by getting the most
           stunning, high-quality photos that improve your
           business image.
            </p> 
    </div>
    </div>
  </div>       
    )
}

export default Info