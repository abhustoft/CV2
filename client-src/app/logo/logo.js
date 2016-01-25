import * as React from 'react';
import * as ReactDom from 'react-dom';

var Logo = React.createClass({
  render: function() {
    return (
      <div className="logo">
        <img src="app/images/logo.png" alt="Cap Gemini logo"/>
      </div>
    );
  }
});

export {Logo}
