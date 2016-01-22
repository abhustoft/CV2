import * as React from 'react';
import * as ReactDom from 'react-dom';

var GetRepos = React.createClass({
  render: function() {
    return (
      <div>
        <button className="repo-button">get repos</button>
        <button className="clear-button">Clear</button>
      </div>
    );
  }
});

export {GetRepos}
