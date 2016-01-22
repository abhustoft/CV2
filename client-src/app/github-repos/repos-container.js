import * as React from 'react';
import * as ReactDom from 'react-dom';

import * as JQuery from 'jquery';
import * as Rx from 'rx';

import {GetRepos} from './get-repos';
import {GitHubRepos} from './github-repos';
import {myGithubRepos} from '../my_github_repos';

var ReposContainer = React.createClass({

  componentDidMount: function() {
    const containerThis = this;
    const url = `https://api.github.com/users/abhustoft/repos`;
    const getButton = document.querySelector('.repo-button');
    const clearButton = document.querySelector('.clear-button');
    const getReposClickStream = Rx.Observable.fromEvent(getButton, 'click');
    const clearClickStream = Rx.Observable.fromEvent(clearButton, 'click');

    const requestStream = getReposClickStream.startWith('startup click')
      .map(function() {
        return url;
      }).flatMap(function(url) {
        console.log('Requesting data from', url);
        return Rx.Observable.fromPromise(jQuery.getJSON(url));
      });

    requestStream.subscribe(function(response) {
      // render `response` to the DOM however you wish
      console.log('Stream response in my_github-repos.js:', response);
      containerThis.setState({repos: response});
    });


    //const clearStream = clearClickStream
    //  .map(function() {
    //    return url;
    //  }).flatMap(function(url) {
    //    console.log('Requesting data from', url);
    //    return Rx.Observable.fromPromise(jQuery.getJSON(url));
    //  });

    clearClickStream.subscribe(function(theClickEvent) {
      // render `response` to the DOM however you wish
      console.log('Clear click:', theClickEvent);
      containerThis.setState({repos: []});
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
