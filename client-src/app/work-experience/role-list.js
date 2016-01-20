import * as React from 'react';
import * as ReactDom from 'react-dom';

import {WorkRole} from './work-role';

var RoleList = React.createClass({
  render: function() {
    const roleNodes = this.props.workRoles.map(function(role) {
      return (
        <div key={role.id}>
          <WorkRole company={role.company}
                    companyDescription={role.companyDescription}
                    start={role.start}
                    end={role.end}
                    role={role.role}
                    roleDescription={role.roleDescription}>
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
