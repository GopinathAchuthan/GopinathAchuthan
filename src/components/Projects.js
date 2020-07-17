import React from 'react';
import ProjectCard from './ProjectCard';
import './style.css';

const Projects = ({ projectDetails }) => {
	return (
		<div>
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
						/>
					);
				})
			}

		</div>
	);
}

export default Projects;