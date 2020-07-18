import React from 'react';
import './style.css';

const Navigation = ({ onRouteChange }) => {
	return (
		<div className = 'nav-box'>
			<p onClick={() => onRouteChange('home')} className='navigation'>Home</p>
			<p onClick={() => onRouteChange('work')} className='navigation'>Work</p>
			<p className='navigation'>Contact</p>
		</div>
	);
}


export default Navigation;
