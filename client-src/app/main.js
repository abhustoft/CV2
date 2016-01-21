import * as React from 'react';
import * as ReactDom from 'react-dom';
import marked from 'marked';
import * as Rx from 'rx';

import {myGithubRepos} from './my_github_repos';
//import {GitHubRepos} from './github-repos/github-repos';
//import {GetRepos} from './github-repos/get-repos';
import {ReposContainer} from './github-repos/repos-container';
import {WorkExperience} from './work-experience/work-experience';

myGithubRepos('abhustoft');

//myGithubRepos('abhustoft').then(function (ghrepos){
//  //repos.forEach(repo => console.log(repo.name));
//
//  ReactDom.render(
//    <GitHubRepos repos={ghrepos} />,
//    document.getElementById('repos')
//  );
//});

console.log(marked('I am using __markdown__.'));


//var repoButton = document.querySelector('.repoButton');
//var getRepoClickStream = Rx.Observable.fromEvent(repoButton, 'click')
//  .startWith('https://api.github.com/users/abhustoft/repos');

ReactDom.render(
  <WorkExperience url="/api/WorkExperiences" pollInterval={8000} />,
  document.getElementById('content')
);

ReactDom.render(
  <ReposContainer />,
  document.getElementById('reposContainer')
);

