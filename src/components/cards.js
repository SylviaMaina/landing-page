import React from 'react'
import emily from '../images/emily.jpg'
import jennie from '../images/jennie.jpg'
import thomas from '../images/thomas.jpg'
function Cards(){
return(
    <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={emily} alt=""/>
    <div class="card-body">
      
      <p class="card-text">Incredible end results! Our sales increased
      over 400% when we worked with Sunnyside.
      Highly recommended!</p>
    
    <h5 class="card-title">Jennie F </h5>
      <small class="text-muted">Business Owner</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={jennie} alt=""/>
    <div class="card-body">
      
      <p class="card-text">We put our trust in Sunnyside and they delivered,
      making sure our need were met and deadlines were always hit</p>
   
    <h5 class="card-title">Emily R.</h5>
    <small class="text-muted">Marketing Director</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={thomas} alt="Card image cap"/>
    <div class="card-body">
      
      <p class="card-text">Sunnyside's enthusiasm coupled with their keen interest
      in our brand's success made it a satisfying enjoyable experience.</p>
    
    <h5 class="card-title">Thomas S.</h5>
      <small class="text-muted">Chief Operating Officer</small>
    </div>
  </div>
</div>
)

}

export default Cards