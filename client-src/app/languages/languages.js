import * as React from 'react';
import * as ReactDom from 'react-dom';

var Languages = React.createClass({
  render: function() {
    return (
      <div className="languages">
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
