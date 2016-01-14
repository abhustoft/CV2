

import * as React from 'react';
import * as ReactDom from 'react-dom';

var WorkRole = React.createClass({
  render: function() {
    return (
      <div className="workRole">
        <h2 className="roleName">
          {this.props.name}

        </h2>
        <p> {this.props.description}</p>
        <div>{this.props.children}</div>
      </div>
    );
  }
});

export {WorkRole}
