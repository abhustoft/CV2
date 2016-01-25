import * as React from 'react';
import * as ReactDom from 'react-dom';

var Photo = React.createClass({
  render: function() {
    return (
      <div className="picture">
        <img className="photo" src="app/images/consultant.jpg" alt="Picture of the consultant"/>
      </div>
    );
  }
});

export {Photo}
