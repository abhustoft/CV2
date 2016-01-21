import * as React from 'react';
import * as ReactDom from 'react-dom';
import marked from 'marked';

import {myGithubRepos} from './my_github_repos';
import {WorkExperience} from './work-experience/work-experience';

myGithubRepos('abhustoft').then(function (repos){
  repos.forEach(repo => console.log(repo.name));
});

console.log(marked('I am using __markdown__.'));

ReactDom.render(
  <WorkExperience url="/api/WorkExperiences" pollInterval={8000} />,
  document.getElementById('content')
);

