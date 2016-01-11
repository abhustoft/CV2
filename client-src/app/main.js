
import {myGithubRepos} from './my_github_repos';

myGithubRepos('abhustoft').then(function (repos){
  repos.forEach(repo => console.log(repo.name));
});



import * as React from 'react';
import * as ReactDom from 'react-dom';

//import * as marked from 'marked';
console.log(marked('I am using __markdown__.'));


var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];


var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      <h1>Comments</h1>
      <CommentList data={this.props.data} />
      <CommentForm />
    </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
      {comment.text}
      </Comment>
      );
    });

    return (
      <div className="commentList">
      {commentNodes}
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
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="comment">
      <h2 className="commentAuthor">
      {this.props.author}
    </h2>
    <span dangerouslySetInnerHTML={this.rawMarkup()} />
    </div>
    );
  }
});

ReactDom.render(
  <CommentBox data={data}/>,
  document.getElementById('content')
);


