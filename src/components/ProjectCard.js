import React from 'react';
import './style.css';

const ProjectCard = ({id, title, git_url, live_url, img_path}) => {
	if (live_url.length !== 0) {
		return (
			<div className='card'>
				<p>ID: {id}</p>
				<p>Title: {title}</p>
				<p>Git URL: {git_url}</p>
				<p>Live URL: {live_url}</p>
				<img src={img_path} alt='projectimg' className='project-logo'/>
			</div>
		)
	} else {
		return (
			<div className='card'>
				<p>ID: {id}</p>
				<p>Title: {title}</p>
				<p>Git URL: {git_url}</p>
				<img src={img_path} alt='projectimg' className='project-logo' />
			</div>
		);
	}
}

export default ProjectCard;