import * as React from 'react';
import * as ReactDom from 'react-dom';

require('./work-role.styl');

var WorkRole = React.createClass({
  render: function() {
    return (
      <div className="workRole">
        <div className="company">{this.props.company}</div>
        <div className='start'>{this.props.start}</div>
        <div className='end'>{this.props.end}</div>
        <div className="companyDescription">{this.props.companyDescription}</div>
        <div className="role">{this.props.role}</div>
        <div className="roleDescription">{this.props.roleDescription}</div>
      </div>
    );
  }
});

export {WorkRole}
