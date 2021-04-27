import React from "react";
import "./styles/footer.css";
import Logo from "./images/logo.png"
import $ from "jquery";
function Footer(){


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
    return(
		<footer>
		<a href="#" id="scroll" style={{display: "none"}}><span></span></a>
		<nav class="footer-inner">
		  <section class="footer-item">
			<img src = {Logo}></img>
			
			<h2>About TDSG<br/><b class="color">MOTTO</b></h2>
		  </section>
			  
		  <section class="footer-item">
			<h3>Explore</h3>
			  <ul>
			
				<li><a href="#">About Us</a></li>
				<li><a href="#">Product</a></li>
				<li><a href="#">Media</a></li>
				<li><a href="#">Events</a></li>
				<li><a href="#">Contact Us</a></li>
							  </ul>
		  </section>
				
		  <section class="footer-item">
			<h3>Visit</h3>
			  <a href="#">
			  <p>Company Address</p>
			  <p>Street, City</p>
			  <p>Gujarat, India, 123456</p>
			  </a>
		  </section>
			  
		  <section class="footer-item">
			<h3>Follow</h3>
			  <ul>
				<li><a href="#"><i class="fab fa-instagram"></i></a></li>
				<li><a href="#"><i class="fab fa-twitter"></i></a></li>
				<li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
			  </ul>
		  </section>
			  
		  <section class="footer-item">
			 <h3>Legal</h3>
			  <ul>
				<li><a href="#">Terms of Use</a></li>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Cookie Policy</a></li>
			  </ul>
		  </section>
				
		  
				
		  <section class="footer-item">
			 <h3>New Business</h3>
			  <p class="desktop"><a href="#">mail@somemail.com</a></p>
			  <p class="mobile"><a href="#">Email us</a></p>
			  <p><a href="#">012.345.6789</a></p>
		  </section>
		</nav>
	  </footer>

	 
    );
}

export default Footer;