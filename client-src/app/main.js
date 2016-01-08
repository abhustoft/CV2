
import {myGithubRepos} from './my_github_repos';

myGithubRepos('abhustoft').then(function (repos){
  repos.forEach(repo => console.log(repo.name));
});
