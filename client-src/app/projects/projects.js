import * as React from 'react';
import * as ReactDom from 'react-dom';

var Projects = React.createClass({

  loadProjects: function() {
    fetch('/api/Projects')
      .then(response => response.json())
      .then(json => {
        this.setState({projects: json});
        console.log(json);
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
      .map(function(
        {id, Company, CompanyDescription, Role, From, To, Description, SWFramework, Technology, Tool}) {
        const
          formattedFrom = From.substring(0,7),
          formattedTo = To.substring(0,7)

        return (
          <div key={id} className="cv-project">
            <div className="cv-project__period">
              <div className="cv-project__from">{formattedFrom} - </div>
              <div className="cv-project__to">{formattedTo}</div>
            </div>

            <div className="cv-projects__content">
              <div className="cv-project__company">{Company}</div>
              <p className="cv-project__company-description">{CompanyDescription}</p>
              <p className="cv-project__description">{Description}</p>
              <p className="cv-project__swframework"><span>Software/Rammeverk: </span>{SWFramework}</p>
              <p className="cv-project__role"><span>Rolle: </span>{Role}</p>
              <p className="cv-project__technology"><span>Teknologi: </span>{Technology}</p>
              <p className="cv-project__tools"><span>Verktøy: </span>{Tool}</p>
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
