import * as React from 'react';
import * as ReactDom from 'react-dom';
import { togglePhoto } from '../redux/actions'
import {Logo} from '../logo/logo';

require('./description.styl');

var Description = React.createClass({

  render: function() {
    const {dispatch} = this.props
    const name = this.props.name.map(({FullName}) => FullName)
    const paragraphs = this.props.profileTexts
        .map(function({Paragraph, Sequence}) {
          return (
            <div key={Sequence}>
              <p>{Paragraph}</p>
            </div>
          );
        })
        .sort((a, b) => {return a.key - b.key;})

    const togglePhotoView = function () {
      dispatch(togglePhoto());
    }

    return (
      <div className="cv-description">
        {/*<Logo />*/}
        <div className="cv-description__heading">Konsulentprofil</div>
        <div className="cv-description__name"
             onClick={togglePhotoView}>
          {name}
        </div>
        <img  src="app/images/photo-camera-with-flash.svg" alt="GitHub logo"
              className="cv-description__photo"
              onClick={togglePhotoView} />
        {paragraphs}
      </div>
    );
  }
});

export {Description}
