import * as React from 'react';
import {connect} from 'react-redux'

import {Photo} from '../photo/photo';
import {Description} from '../description/description';
import {KeyInfo} from '../keyInfo/keyInfo';
import {Projects} from '../projects/projects';

import {editNew} from '../redux/actions'

require('./MainContent.styl');

var MainContent = React.createClass({
  loadProfileText: function() {
    fetch('/api/ProfileTexts')
      .then(response => response.json())
      .then(json => {
        this.setState({profileTexts: json});
      });
  },

  loadName: function() {
    fetch('/api/Names')
      .then(response => response.json())
      .then(json => {
        this.setState({name: json});
      });
  },

  getInitialState: function() {
    return {
      profileTexts: [],
      name: []};
  },

  componentDidMount: function() {
    this.loadProfileText();
    this.loadName();
  },
  render: function() {
    const {dispatch, myState} = this.props;
    return (
      <div className="">
        <div className="cv-profile">
          <Description
            show={myState.showDescription}
            profileTexts = {this.state.profileTexts}
            name = {this.state.name}
            dispatch={dispatch}
          />
          <Projects dispatch={dispatch} showProjects={myState.showProjects}/>
          <Photo dispatch={dispatch} showPhoto={myState.showingPhoto}/>
          <KeyInfo />
        </div>

      </div>
    );
  }
});


function mapStateToProps(myState) {
  return {
    myState
  }
}

export default connect(mapStateToProps)(MainContent)
