import React from 'react';
import './style.css';
import '../font awesome/css/font-awesome.min.css'
const Footer = () => {
	return (
		<footer>
			<div className="social-links">
				<a href="https://twitter.com/GopinathAchuth1" target="_blank" rel="noopener noreferrer">
		        	<i className="fa fa-twitter fa-inverse"></i>
		        </a>
		        <a href="https://www.linkedin.com/in/gopinath-achuthan/" target="_blank" rel="noopener noreferrer">
		        	<i className="fa fa-linkedin fa-inverse"></i>
		        </a>
		        <a href="https://github.com/GopinathRock" target="_blank" rel="noopener noreferrer">
		        	<i className="fa fa-github fa-inverse"></i>
          		</a>
          		<a href="#!" target="_blank" rel="noopener noreferrer">
          			<i className="fa fa-envelope fa-inverse"></i>
          		</a>
        	</div>
			<p>Developed by Gopinath Achuthan from scratch</p>
		</footer>
	)
}

export default Footer;