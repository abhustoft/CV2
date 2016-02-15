import * as React from 'react';
import * as ReactDom from 'react-dom';

var Subjects = React.createClass({
  render: function() {
    return (
      <div className="cv-subjects">
        <div className="cv-subjects__heading">Subjects</div>
        <hr/>
        <div className="cv-subjects__container">
          <div>Flexbox</div>
          <div>HTML5</div>
          <div>Responsive design</div>
          <div>Application development</div>
          <div>SASS</div>
          <div>Git</div>
          <div>Grunt</div>
          <div>Gulp</div>
          <div>Jira</div>
          <div>Less</div>
          <div>Stylus</div>
        </div>
      </div>
    );
  }
});

export {Subjects}
