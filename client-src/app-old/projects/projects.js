import * as React from 'react';
import * as ReactDom from 'react-dom';

import { addProject, toggleProject } from '../redux/actions'

require('./projects.styl');

var Projects = React.createClass({

  loadProjects: function() {
    fetch('/api/Projects')
      .then(response => response.json())
      .then(json => {
        console.log('Projects fetched: ', json);
        this.setState({projects: json});
        json.forEach( (project) => {
          this.props.dispatch(addProject(project.Company, project.id))
        })
      });
  },

  getInitialState: function() {
    return {projects: []};
  },

  componentDidMount: function() {
    this.loadProjects();
  },

  render: function() {
    const {dispatch, showProjects} = this.props;

    const projects = this.state.projects
      .map(function({id,
        Company,
        CompanyDescription,
        Role,
        From,
        To,
        Description,
        SWFramework,
        Technology,
        Tool}) {
          const formattedFrom = From.substring(0,7);
          const formattedTo = To.substring(0,7);

          const shouldHide = showProjects.filter( project => {
            return (project.id === id) && project.hide
          });

          let viewClass = shouldHide.length ? 'cv-project--hide' : '';
          let sizeClass = shouldHide.length ? 'cv-project--size' : '';

          const contentClasses = `cv-project__sub-content ${viewClass}`;
          const projectClasses = `cv-project ${sizeClass}`;

          const toggleProjectView = function () {
            dispatch(toggleProject(id));
          };

        return (
            <div key={id} className={projectClasses} onClick={toggleProjectView}>
              <div className="cv-project__period">
                <div className="cv-project__from">{formattedFrom} - </div>
                <div className="cv-project__to">{formattedTo}</div>
              </div>

              <div className="cv-project__content">
                <div className="cv-project__company">{Company}</div>
                <div className={contentClasses}>
                  <p className="cv-project__company-description">{CompanyDescription}</p>
                  <p className="cv-project__description">{Description}</p>
                  <p className="cv-project__swframework"><span>Software/Rammeverk: </span>{SWFramework}</p>
                  <p className="cv-project__role"><span>Rolle: </span>{Role}</p>
                  <p className="cv-project__technology"><span>Teknologi: </span>{Technology}</p>
                  <p className="cv-project__tools"><span>Verktøy: </span>{Tool}</p>
                </div>
              </div>
            </div>
          );
      });

    return (
      <div className="cv-projects">
        <div className="cv-projects__heading">Prosjektreferanser</div>
        <hr/>
        <div className="cv-projects__list">{projects}</div>
      </div>
    );
  }

});

export {Projects}
