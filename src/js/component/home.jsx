import React from "react";
import "./home.css"

//include images into your bundle

import Navbar from "./Navbars.jsx";
import Card from "./Cards.jsx"
import Jumbotron from "./Jumbotrons.jsx"
import Footer from "./Footer.jsx"
//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<Jumbotron/>
			
			 <div className="w-100">
				<div className="row w-100 g-4">
					{/* <div className=" w-100"> */}
						{/* <div className = "cards"> */}
							<Card img= "https://padelworldpress.es/wp-content/uploads/2023/05/apertura-metalbone-3-2-nueva-pala-adidas-ale-galan-2023-1068x698.jpg" titulo="REVES" parrafo="El golpe de revés consiste en dar a la bola después del bote, de forma directa, del lado opuesto del brazo hábil del jugador y se realiza de abajo hacia arriba. En cualquiera de las tres modalidades del golpe de revés (sin efecto o plano, con efecto liftado o cortado), la mecánica de la técnica es muy parecida."/> 
							<Card img= "https://grupopineda.eu/wp-content/uploads/2023/12/golpe-vibora-padel.jpg" titulo="BANDEJA" parrafo="La bandeja es un golpe específico del pádel que nos ayuda a recuperar una posición ventajosa en red. Es un golpe preciso, con efecto y de los más utilizados que requiere tiempo para aprender a utilizarlo. Es una buena opción para los jugadores que no cuentan con la potencia suficiente para sacar los remates de la pita."/>
							<Card img= "https://www.padeladdict.com/wp-content/uploads/2022/06/claves-para-mejorar-nuestro-juego-en-el-fondo-de-la-pista-foto-interior-2.jpg" titulo="EL GLOBO " parrafo="El globo es un golpe de pádel que hace una párabola desde nuestra posición hasta la parte de atrás de los contrarios, superándolos por arriba. El globo es un golpe defensivo que permite echar para atrás a los contrarios y que no dominen la red y por tanto el partido."/>
							<Card img= "https://www.padeladdict.com/wp-content/uploads/2022/08/los-mejores-remates-del-world-padel-tour-en-lo-que-llevamos-de-temporada-portada.jpg" titulo="SMASH" parrafo="El smash es un golpe de potencia que se efectúa en la parte cercana a la red. Este golpeo solo se puede realizar si la bola viene alta por ejemplo, resultado de una devolución de globo."/>
						{/* </div> */}
					{/* </div> */}
				</div>
			 </div>
			
			<Footer/>
			</>
	);
};





export default Home;
