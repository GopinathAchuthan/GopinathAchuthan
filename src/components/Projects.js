import React from 'react';
import ProjectCard from './ProjectCard';
import './style.css';

const Projects = ({ projectDetails }) => {
	return (
		<div className='projects'>
			{
				projectDetails.map((project, i) => {
					return (
						<ProjectCard 
							key={i}
							id={project.id}
							title={project.title}
							git_url={project.git_url}
							live_url={project.live_url}
							img_path={project.img_path}
							description={project.description}
						/>
					);
				})
			}

		</div>
	);
}

export default Projects;