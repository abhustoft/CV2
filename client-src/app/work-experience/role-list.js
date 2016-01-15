import * as React from 'react';
import * as ReactDom from 'react-dom';

import {WorkRole} from './work-role';

var RoleList = React.createClass({
  render: function() {
    var roleNodes = this.props.workRoles.map(function(role) {
      return (
        <div key={role.id}>
          <WorkRole name={role.company}
                    description={role.description}
                    start={role.start}
                    end={role.end}>
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
