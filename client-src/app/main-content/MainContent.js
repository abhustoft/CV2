import * as React from 'react';
import * as ReactDom from 'react-dom';
import { connect } from 'react-redux'

import {Logo} from '../logo/logo';
import {Photo} from '../photo/photo';
import {Description} from '../description/description';
import {KeyInfo} from '../keyInfo/keyInfo';
import {Projects} from '../projects/projects';

import { editNew } from '../redux/actions'

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
    const {dispatch, myState} = this.props
    const sendIt = function () {
      console.log('Clicked the profile');
      dispatch(editNew('clicked to edit'));
    }
    return (
      <div className="cv-first-page" onClick={sendIt}>
        <div className="cv-profile">
          <Logo />
          <Description
            profileTexts = {this.state.profileTexts}
            name = {this.state.name}
            dispatch={dispatch}
          />
          <Photo dispatch={dispatch} showPhoto={myState.showingPhoto}/>
          <KeyInfo />
        </div>
        <Projects dispatch={dispatch} showProjects={myState.showProjects}/>
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
