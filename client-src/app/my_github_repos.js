import 'whatwg-fetch';
import * as Rx from 'rx';
import * as JQuery from 'jquery';

var myGithubRepos =  function (username) {
  const url = `https://api.github.com/users/${username}/repos`;

  var requestStream = Rx.Observable.just(url);

  var responseStream = requestStream
    .flatMap(function(url) {
      console.log('Requesting data from', url);
      return Rx.Observable.fromPromise(jQuery.getJSON(url));
    });

  return responseStream;

}

export {myGithubRepos}
