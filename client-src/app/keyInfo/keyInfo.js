import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Subjects} from '../subjects/subjects';
import {Languages} from '../languages/languages';

var KeyInfo = React.createClass({
  render: function() {
    return (
      <div className="cv-keyInfo">
        <Subjects />
        <Languages />
      </div>
    );
  }
});

export {KeyInfo}
