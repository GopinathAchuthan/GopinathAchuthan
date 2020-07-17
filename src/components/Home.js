import React from 'react';
import './style.css';
import profileImage from '../images/defaultProfile.png';

const Home = () => {
	return (
		<div className='home'>
			<p>Hi, my name is Gopinath Achuthan<br />
			I'm Computer Science Graduate Student</p>
			<img src={profileImage} alt='profile' className='circular--square size'/>
		</div>
	)
}

export default Home;