import * as React from 'react';
import * as ReactDom from 'react-dom';

var Subjects = React.createClass({
  render: function() {
    return (
      <div className="subjects">
        <div>Flexbox</div>
        <div>HTML5</div>
        <div>Responsive design</div>
        <div>Application development</div>
        <div>SASS</div>
        <div>Git</div>
      </div>
    );
  }
});

export {Subjects}
