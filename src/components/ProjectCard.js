import React from 'react';
import './style.css';

const ProjectCard = ({id, title, git_url, live_url, img_path, description}) => {
	if (live_url.length !== 0) {
		return (
			<div className='card'>
				<img src={img_path} alt='projectimg' className='project-logo item-a'/>
				<div className='item-b card-cnt'>
					<p className='item-ba pd'>{title}</p>
					<p className='item-bb pd'>{description}</p>
				</div>
				<div className='item-c card-link1 pd'>
					<a href={git_url} target="_blank" rel="noopener noreferrer" className='link-btn pd'>Source Code</a>
					<a href={live_url} target="_blank" rel="noopener noreferrer" className='link-btn pd'>Live</a>
				</div>
			</div>
		);
	} else {
		return (
			<div className='card'>
				<img src={img_path} alt='projectimg' className='project-logo item-a' />
				<div className='item-b card-cnt'>
					<p className='item-ba pd'>{title}</p>
					<p className='item-bb pd'>{description}</p>
				</div>
				<div className='item-c card-link2 pd'>
					<a href={git_url} target="_blank" rel="noopener noreferrer" className='item-ca link-btn pd'>Source Code</a>
					<p hidden className='pd'>Live</p>
				</div>
				
			</div>
		);
	}
}

export default ProjectCard;