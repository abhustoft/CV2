import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Photo} from '../photo/photo';
import {Subjects} from '../subjects/subjects';
import {Languages} from '../languages/languages';

var CondensedInfo = React.createClass({
  render: function() {
    return (
      <div className="condensed-info">
        condensed info
        <Photo />
        <Subjects />
        <Languages />
      </div>
    );
  }
});

export {CondensedInfo}
