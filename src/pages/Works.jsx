import Header from 'components/Header';
import React from 'react';
import { NavLink } from 'react-router-dom';
import projects from 'context/WorksData';
import DarkLightMode from 'context/DarkLightMode';

const Works = () => {

  const dlMode2 = React.useContext(DarkLightMode);

  return (
    <div className={`works ${dlMode2.dlMode ? 'light' : 'dark'}`}>
      <Header />
      <h1>The projects</h1>
      {projects.map((project) => (
        <NavLink to={`works/${project.name}-study-case`} key={project.name}>
          {project.name}
        </NavLink>
      ))}
      <h3> Au fil des années, nous avons pu accompagner les meilleurs.</h3>
      <p>
        Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.
      </p>
    </div>
  );
};

export default Works;