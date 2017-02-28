import * as React from 'react';
import * as ReactDom from 'react-dom';

require('./gitHub__repos.styl');

var GitHubRepos = React.createClass({
  render: function() {
    var GitHubReposNodes = this.props.repos.map(function({id, name}) {
      return (
        <div key={id} className="cv-gitHub__repoItem">
          {name}
        </div>
      );
    });

    return (
      <div className="cv-gitHub__repos">
        {GitHubReposNodes}
      </div>
    );
  }
});

export {GitHubRepos}
