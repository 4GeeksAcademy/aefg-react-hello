import React from "react";

import "./Cards.css"


const Card = (props) => {
	return (
		
//     <div classNameName = "container">

// <div classNameName="row">

// <div classNameName= "col-md-3">

// <div classNameName="card" >
   
//   <img src= {props.img} classNameName="img" alt=""></img>

//   <div classNameName="card-body">
//     <h5 classNameName="titulo">{props.titulo}</h5>
//     <p classNameName="parrafo">{props.parrafo}</p>
    
//   </div>
// </div>

// </div>

// </div>

//     </div>
 <div className="card col-sm-12 col-md-6 col-lg-3">
  <div className=" g-4">
{/* <div className="col"> */}
  <div className=" h-100">
    <img src={props.img} className="card-img" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.titulo}</h5>
      <p className="card-text parrafo no-scrollbar">{props.parrafo}</p>
    </div>
    
  {/* </div> */}
</div>

  </div> 
 </div>

 



	);

};

export default Card;