import * as React from 'react';
import * as ReactDom from 'react-dom';

import {RoleList} from './role-list';
import {WorkRoleForm} from './work-role-form';

var WorkExperience = React.createClass({

  loadRolesFromServer: function() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(json => {
        this.setState({data: json});
        console.log('Loaded roles from server: ', json);
      });
  },

  handleWorkRoleSubmit: function({
    company = 'NOT PROVIDED',
    companyDescription = 'NOT PROVIDED',
    role = 'NOT PROVIDED',
    roleDescription = 'NOT PROVIDED'}) {

    console.log('send to server', role);

    fetch(this.props.url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'company': company,
        'companyDescription': companyDescription,
        'start':  new Date(1992, 10, 17),
        'end':  new Date(1993, 3, 1),
        'role': role,
        'roleDescription': roleDescription,
        'id': Date.now()
      })
    })
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadRolesFromServer();
    setInterval(this.loadRolesFromServer, this.props.pollInterval);
  },

  render: function() {
    return (
      <div className="cv-work">
        <h4>Work Experience</h4>
        <RoleList workRoles={this.state.data}/>
        <WorkRoleForm onRoleSubmit={this.handleWorkRoleSubmit}/>
      </div>
    );
  }

});

export {WorkExperience}
