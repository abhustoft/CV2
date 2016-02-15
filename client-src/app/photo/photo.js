import * as React from 'react';
import * as ReactDom from 'react-dom';

var Photo = React.createClass({
  render: function() {
    return (
      <div className="cv-photo">
        <img className="cv-photo__image" src="app/images/consultant.jpg" alt="Picture of the consultant"/>
      </div>
    );
  }
});

export {Photo}
