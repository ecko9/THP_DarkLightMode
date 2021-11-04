import Header from 'components/Header';
import React from 'react';
import { useParams } from 'react-router';
import projects from 'context/WorksData';
import Showdown from 'showdown';

const Project = () => {

  const project = useParams();
  const [validProject, setValidProject] = React.useState([{ name: "", title: "", content: "" }]);

  const converter = new Showdown.Converter();

  const createMarkup = (txt) => {
    return { __html: converter.makeHtml(txt) }
  }

  React.useEffect(
    () => {
      let slug = project['project'];
      let sc = "-study-case";
      let prefix = slug.slice(0, slug.length - sc.length);
      let suffix = slug.slice(slug.length - sc.length);
      let tmp;

      if ((suffix === sc) && (prefix !== undefined && prefix !== null && prefix.length > 0))
        tmp = projects.filter(x => x.name === prefix);

      if (tmp.length > 0 && tmp !== null && tmp !== undefined)
        setValidProject(tmp);
      return;
    }, [project]
  );

  return (
    <div className="project">
      <Header />
      <h1>Projet : {validProject[0].name}</h1>
      <p dangerouslySetInnerHTML={createMarkup(validProject[0].title)}></p>
      <p dangerouslySetInnerHTML={createMarkup(validProject[0].content)}></p>
    </div>
  );
};

export default Project;