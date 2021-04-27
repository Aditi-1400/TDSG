import React, {useState} from "react";
import './styles/landing.css';
import Logo from "./Logo";
import MII from "./images/make-in-space.png";
import close from "./images/close.png"

function App(){

	function closeAll(){
			setCollapsible([]);
		
		var x = document.getElementById("collapsible");
		x.style.height = "0px";
		x.style.transition = "none";;
		x.style.backgroundColor = "transparent";
	
		var y = document.getElementById("landing");
		y.classList.remove("active");
		var z = document.getElementById("close");
		z.style.display = "none";

	}
	const[collapsible, setCollapsible] = useState([]);

	function handleClick(e){

		var x = document.getElementById("collapsible");
		
			x.style.height = "auto";
			x.style.backgroundColor = "#fff";
			x.style.transition = "all 0.3s ease-in";
		var y = document.getElementById("landing");
		y.classList.add("active");
		var z = document.getElementById("close");
		z.style.display = "block";
		let j = (e.target.value);
		setCollapsible([]);
		setCollapsible(
			submenu[j]
		 );
	}

	let submenu = {

		aboutus:["Our History", "Leadership","Strengths", "Values", "Exports", "Sustainability"],
		product:["Battery Cell", "Battery Module", "Battery Pack", "About Li-ion Batteries"],
		media:["In News", "Gallery"],
		events:["Internal", "External"],
		careers:["Life @TDSG", "Why TDSG", "Meet Our People", "Join Us"],
		contact:["Offices", "Business Opportunities", "Contact Us"]


	};
	
	function createmenu(menu){
		return(
			<div >
			<a href="/about" class="btn btn-1">
			<svg>
				<rect x="0" y="0" fill="none" width="100%" height="100%"/>
			</svg>
			{menu} >
			</a>
			</div>
		)
	}

	return(
        <div class="container-fluid">
		<div class="row">
			<div id = "landing"class="landing container">
				<nav>
					<input type="checkbox" id="nav" class="hidden"></input>
					<label for="nav" class="nav-btn">
							<i></i>
							<i></i>
							<i></i>
					</label>
					<Logo></Logo>
					<div class="nav-wrapper ">
							<ul >
								
								<li ><button className = "header-nav-item hvr-underline-from-center" onClick = {handleClick} value = "aboutus">About Us</button></li>
								<li ><button className = "header-nav-item hvr-underline-from-center" onClick = {handleClick} value = "product">Product</button></li>
								<li ><button className = "header-nav-item hvr-underline-from-center" onClick = {handleClick} value = "media">Media & Gallery</button></li>
								<li ><button className = "header-nav-item hvr-underline-from-center" onClick = {handleClick} value = "events">Events</button></li>
								<li ><button className = "header-nav-item hvr-underline-from-center" onClick = {handleClick} value = "careers">Career</button></li>
								<li ><button className = "header-nav-item hvr-underline-from-center" onClick = {handleClick} value = "contact">Contact Us</button></li>
								<li><i class="header-nav-item fas fa-search"></i></li>
								
								
							</ul>	
					</div>

					<img className = "mii-logo" src = {MII}></img>

				</nav>
			</div>
	
			<div id = "collapsible" className = "collapsible">

			<img id = "close" src = {close} className = "close-button" onClick = {closeAll}></img>
			<div id="container">
				<div class = "row">
				{collapsible.map(createmenu)}
		
					
				</div>
			</div> 
			</div>
		

			
			<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class="info">
						<h1 style = {{color:'red'}}>TDS<span style = {{color:"#da8c12"}}>G</span></h1>
						<p>Moving towards a greener world with our hands and hearts</p>
					</div>
				</div>
				<div class="carousel-item">
					<div class="info">
						<h3>India's <span style = {{color:'#da8c12'}}>First</span> Lithium Ion Battery Manufacturing</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
					</div>
				</div>
				<div class="carousel-item">
					<div class="info">
						<h1>SLIDE THREE</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
					</div>
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
			</div> 
		</div>
	</div>
	);
    
}



export default App;
