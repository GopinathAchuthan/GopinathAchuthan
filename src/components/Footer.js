import React from 'react';
import './style.css';
import '../font awesome/css/font-awesome.min.css'
const Footer = () => {
	return (
		<div className = 'footer'>
			<div className="social-links">
		        <a href="#!" target="_blank">
		        	<i className="fa fa-linkedin fa-inverse"></i>
		        </a>
		        <a href="#!" target="_blank">
		        	<i className="fa fa-github fa-inverse"></i>
          		</a>
          		<a href="#!" target="_blank">
		        	<i className="fa fa-twitter fa-inverse"></i>
		        </a>
        	</div>
			<p>Developed by Gopinath Achuthan</p>
		</div>
	)
}

export default Footer;