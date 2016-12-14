import * as React from 'react';

const Circle = ({children}) => {
  const circleStyle = {
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    width: '35vw',
    height: '35vw',
    backgroundColor: 'darkseagreen',
    marginTop: '10vw'
  };

  const center = {
    alignSelf: 'center'
  };

  return (
    <div style={circleStyle}>
      <div style={center}>
        <h1>{children}</h1>
      </div>
    </div>
  )
};

export default Circle;
