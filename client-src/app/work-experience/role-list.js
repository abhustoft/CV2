import * as React from 'react';
import * as ReactDom from 'react-dom';

import {WorkRole} from './work-role';

var RoleList = React.createClass({
  render: function() {
    var roleNodes = this.props.workRoles
      .map(function(
        {id, company: companyName, companyDescription, role, start, end, roleDescription}) {
      return (
        <div key={id}>
          <WorkRole company = {companyName}
                    companyDescription = {companyDescription}
                    start = {start}
                    end   = {end}
                    role  = {role}
                    roleDescription = {roleDescription}>
          </WorkRole>
        </div>
      );
    });

    return (
      <div className="roleList">
        {roleNodes}
      </div>
    );
  }
});

export {RoleList}
