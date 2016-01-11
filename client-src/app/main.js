
import {myGithubRepos} from './my_github_repos';

myGithubRepos('abhustoft').then(function (repos){
  repos.forEach(repo => console.log(repo.name));
});



import * as React from 'react';
import * as ReactDom from 'react-dom';

//import * as marked from 'marked';
console.log(marked('I am using __markdown__.'));


var CommentBox = React.createClass({
  loadCommentsFromServer: function() {

    fetch(this.props.url)
      .then(response => response.json())
      .then(json => this.setState({data: json}));

  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function() {
    return (
      <div className="commentBox">
      <h1>Comments</h1>
      <CommentList data={this.state.data} />
      <CommentForm />
    </div>
    );
  }

});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.company} key={comment.id}>
      {comment.description}
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
  <CommentBox url="/api/JobExperiences" pollInterval={200000} />,
  document.getElementById('content')
);


