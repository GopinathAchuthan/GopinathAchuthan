import React from 'react';
import './style.css';

const Navigation = ({ onRouteChange }) => {
	return (
		<div className = 'nav-box'>
			<p onClick={() => onRouteChange('home')} className = 'navigation'>Home</p>
			<p onClick={() => onRouteChange('projects')} className = 'navigation'>Projects</p>
		</div>
	)
}


export default Navigation;
