import * as React from 'react';
import * as ReactDom from 'react-dom';

import {GetRepos} from './get-repos';
import {GitHubRepos} from './github-repos';
import {myGithubRepos} from '../my_github_repos';

var ReposContainer = React.createClass({

  handleGetReposSubmit: function(e) {
    e.preventDefault();
    var responseStream = myGithubRepos('abhustoft');
    var containerThis = this;

    responseStream.subscribe(function(response) {
      // render `response` to the DOM however you wish
      console.log('Stream response in my_github-repos.js:', response);
      containerThis.setState({data: response});
    });

  },

  getInitialState: function() {
    return {data: []};
  },

  render: function() {
    return (
      <div className="ReposContainer">
        <GetRepos handleSubmit={this.handleGetReposSubmit}/>
        <GitHubRepos repos={this.state.data} />
      </div>
    );
  }

});

export {ReposContainer}
