import * as React from 'react';
import * as ReactDom from 'react-dom';

import { addProject } from '../redux/actions'

var Projects = React.createClass({

  loadProjects: function() {
    fetch('/api/Projects')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({projects: json});
        //dispatch(addProject(json.id))
      });
  },

  getInitialState: function() {
    return {projects: []};
  },

  componentDidMount: function() {
    this.loadProjects();
  },

  render: function() {
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
          const formattedFrom = From.substring(0,7)
          const formattedTo = To.substring(0,7)

          //const {dispatch, showProjects} = this.props;
          //const viewClass = showProjects.show ? '' : 'cv-hide';
          const cvClass = `cv-project` //`cv-project ${viewClass}`

          return (
            <div key={id} className={cvClass}>
              <div className="cv-project__period">
                <div className="cv-project__from">{formattedFrom} - </div>
                <div className="cv-project__to">{formattedTo}</div>
              </div>

              <div className="cv-project__content">
                <div className="cv-project__company">{Company}</div>
                <div className="cv-project__sub-content">
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
