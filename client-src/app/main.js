
import {myGithubRepos} from './my_github_repos';

myGithubRepos('abhustoft').then(function (repos){
  repos.forEach(repo => console.log(repo.name));
});



import * as React from "react";
import * as ReactDom from "react-dom";
//import * as marked from "marked";

//ReactDom.render(
//<p>First example!</p>,
//  document.getElementById('example')
//);

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      <h1>Comments</h1>
      <CommentList />
      <CommentForm />
    </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment<pre>in pre</pre></Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
    </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
      Hello, world! I am a CommentForm.
    </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
      <h2 className="commentAuthor">
      {this.props.author}
    </h2>
    {this.props.children}
    </div>
    );
  }
});

ReactDom.render(
  <CommentBox />,
  document.getElementById('content')
);


