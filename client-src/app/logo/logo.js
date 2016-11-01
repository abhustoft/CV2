import * as React from 'react';
import * as ReactDom from 'react-dom';

require('./logo.styl');

var Logo = React.createClass({
  render: function() {
    return (
      <div className="cv-logo">
        <img src="app/images/logo.png" alt="Cap Gemini logo"/>
      </div>
    );
  }
});

export {Logo}
