import 'whatwg-fetch';
import {reposForUser} from './api';

console.log('hello');

reposForUser('abhustoft').then(function (repos){
  repos.forEach(repo => console.log(repo.name));
});
