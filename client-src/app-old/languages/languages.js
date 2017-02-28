import * as React from 'react';
import * as ReactDom from 'react-dom';

require('./languages.styl');

var Languages = React.createClass({
  render: function() {
    return (
      <div className="cv-languages">
        <div className="cv-languages__heading">Languages</div>
        <hr/>
        <div>
          <span>English</span><span> Fluent</span>
        </div>
        <div>
          <span>Norwegian</span><span>Mother tongue</span>
        </div>
      </div>
    );
  }
});

export {Languages}
