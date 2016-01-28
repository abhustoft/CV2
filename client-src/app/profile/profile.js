import * as React from 'react';
import * as ReactDom from 'react-dom';

var Profile = React.createClass({

  render: function() {
    var paragraphs = this.props.profileTexts
      .map(function({id, Paragraph, Sequence}) {
        return (
          <div key={Sequence}>
            <p>{Paragraph}</p>
          </div>
        );
      })
      .sort((a, b) => {return a.key - b.key;});

    console.log('Sorted texts: ', paragraphs);

      return (
      <div className="profile">
        <div className="consultant-heading">Konsulentprofil</div>
        <div className="consultant-name">Alf Bjørn Hustoft</div>
        {paragraphs}
      </div>
    );
  }
});

export {Profile}
