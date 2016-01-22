import * as React from 'react';
import * as ReactDom from 'react-dom';

var GitHubRepos = React.createClass({
  render: function() {
    var GitHubReposNodes = this.props.repos.map(function({id, name}) {
      return (
        <div key={id} className="github-repo">
          {name}
        </div>
      );
    });

    return (
      <div className="github-repos-list">
        {GitHubReposNodes}
      </div>
    );
  }
});

export {GitHubRepos}
