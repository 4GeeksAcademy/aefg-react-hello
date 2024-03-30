import React from "react";

import "./Jumbotrons.css"

const jumbotron = () => {
	return (
		<div className="container-fluid jumbotron-root">
			{/* <div className="row">
				<div className="col-md-6">
				<div className="jumbo"> */}
  <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/07/13/16577411293207.jpg" className="d-block w-100" alt=""/>
    </div>
	{/* </div>
	</div>
	</div> */}

				</div>
			</div>
		</div>
		
	);
};

export default jumbotron;