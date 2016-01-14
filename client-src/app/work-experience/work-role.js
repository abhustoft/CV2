import * as React from 'react';
import * as ReactDom from 'react-dom';

var WorkRole = React.createClass({
  render: function() {
    return (
      <div className="workRole">
        <div className="roleName">{this.props.name}</div>
        <div className='start'>{this.props.start}</div>
        <div className='end'>{this.props.end}</div>
        <div>{this.props.description}</div>
      </div>
    );
  }
});

export {WorkRole}
