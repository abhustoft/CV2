
import {myGithubRepos} from './my_github_repos';

myGithubRepos('abhustoft').then(function (repos){
  repos.forEach(repo => console.log(repo.name));
});



import * as React from "react";
import * as ReactDom from "react-dom";

ReactDom.render(
<p>Hello, world!</p>,
  document.getElementById('example')
);
