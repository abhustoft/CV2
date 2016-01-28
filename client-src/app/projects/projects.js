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
          <div key={id} className="project">
            <div className="projects-period">
              <div className="project-from">{formattedFrom} - </div>
              <div className="project-to">{formattedTo}</div>
            </div>

            <div className="projects-content">
              <div className="project-company">{Company} </div>
              <p className="project-company-description">{CompanyDescription} </p>
              <p className="project-description">{Description} </p>
              <p className="project-swframework">{SWFramework} </p>
              <p className="project-role">{Role} </p>
              <p className="project-technology">{Technology} </p>
              <p className="project-tool">{Tool} </p>
            </div>
          </div>
        );
      });

    return (
      <div>
        <div className="projects-heading">Prosjektreferanser</div>
        <hr/>
        <div className="projects">{projects}</div>
      </div>
    );
  }

});

export {Projects}
