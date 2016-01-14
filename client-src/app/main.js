
import {myGithubRepos} from './my_github_repos';
import {WorkRole} from './job-experience/role';

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

  handleCommentSubmit: function(comment) {
    console.log('send to server', comment);

    //var comments = this.state.data;
    //// Optimistically set an id on the new comment. It will be replaced by an
    //// id generated by the server. In a production application you would likely
    //// not use Date.now() for this and would have a more robust system in place.
    //comment.id = Date.now();
    //var newComments = comments.concat([comment]);
    //console.log('Set state to:', newComments)
    //this.setState({data: newComments});

    fetch(this.props.url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "company": comment.author,
        "start": "2015-10-11",
        "end": "2016-04-01",
        "description": comment.text,
        "title": "from form",
        "id": Date.now()
      })
    })
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
      <CommentForm onCommentSubmit={this.handleCommentSubmit} />
    </div>
    );
  }

});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <div key={comment.id}>

          <WorkRole name={comment.company} description={comment.description}>childish text</WorkRole>
        </div>
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
  getInitialState: function() {
    return {author: '', text: ''};
  },

  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },

  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }

    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
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
  <CommentBox url="/api/JobExperiences" pollInterval={2000} />,
  document.getElementById('content')
);


