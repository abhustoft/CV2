import * as React from 'react';
import * as ReactDom from 'react-dom';

import * as jQuery from 'jquery';
import * as Rx from 'rx';

import {GetRepos} from './gitHub__buttons';
import {GitHubRepos} from './gitHub__repos';

var ReposContainer = React.createClass({

  componentDidMount: function() {
    const containerThis = this;
    const url = `https://api.github.com/users/${this.props.user}/repos`;

    const getButton   = document.querySelector('.js-gitHub__btn--get');
    const clearButton = document.querySelector('.js-gitHub__btn--clear');

    const getReposClickStream = Rx.Observable.fromEvent(getButton, 'click');
    const clearClickStream = Rx.Observable.fromEvent(clearButton, 'click').map(() => []);

    // const requestStream = getReposClickStream.startWith('startup click')
    //   .map(() => url)
    //   .flatMap((url) => {return Rx.Observable.fromPromise(jQuery.getJSON(url));})
    //   .map((repoArray) => {
    //     const trimmedRepos = repoArray.map((bigRepo) => {
    //       return {name: bigRepo.name, id: bigRepo.id};
    //     });
    //     return trimmedRepos;})
    //   .merge(clearClickStream);

    // requestStream.subscribe(function(repos) {
    //   containerThis.setState({repos: repos});
    // });

  },

  getInitialState: function() {
    return {repos: []};
  },

  render: function() {
    return (
      <div className="cv-gitHub">
        <img  src="app/images/github-octocat.svg" alt="GitHub logo"
              className="cv-gitHub__cat"></img>
        <GetRepos />
        <GitHubRepos repos={this.state.repos} />
      </div>
    );
  }

});

export {ReposContainer}
