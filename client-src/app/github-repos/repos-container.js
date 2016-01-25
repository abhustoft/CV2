import * as React from 'react';
import * as ReactDom from 'react-dom';

import * as JQuery from 'jquery';
import * as Rx from 'rx';

import {GetRepos} from './get-repos';
import {GitHubRepos} from './github-repos';

var ReposContainer = React.createClass({

  componentDidMount: function() {
    const containerThis = this;
    const url = `https://api.github.com/users/${this.props.user}/repos`;

    const getButton = document.querySelector('.repo-button');
    const clearButton = document.querySelector('.clear-button');

    const getReposClickStream = Rx.Observable.fromEvent(getButton, 'click');
    const clearClickStream = Rx.Observable.fromEvent(clearButton, 'click').map(() => []);

    const requestStream = getReposClickStream.startWith('startup click')
      .map(() => url)
      .flatMap((url) => {return Rx.Observable.fromPromise(jQuery.getJSON(url));})
      .map((repoArray) => {
        const trimmedRepos = repoArray.map((bigRepo) => {
          return {name: bigRepo.name, id: bigRepo.id};
        });
        return trimmedRepos;})
      .merge(clearClickStream);

    requestStream.subscribe(function(repos) {
      containerThis.setState({repos: repos});
    });

  },

  getInitialState: function() {
    return {repos: []};
  },

  render: function() {
    return (
      <div className="ReposContainer">
        <GetRepos />
        <GitHubRepos repos={this.state.repos} />
      </div>
    );
  }

});

export {ReposContainer}
