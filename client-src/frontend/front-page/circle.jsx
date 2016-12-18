import * as React from 'react';
import {Link} from 'react-router';

const Circle = ({page, children}) => {
  const circleStyle = {
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    width: '30vw',
    height: '30vw',
    backgroundColor: 'blue',
    marginTop: '5vw'
  };

  const center = {
    alignSelf: 'center'
  };

  return (
    <div style={circleStyle} role="button">
      <div style={center}>
        <h3>
          <Link to={page}>{children}</Link>
        </h3>
      </div>
    </div>
  )
};

export default Circle;
