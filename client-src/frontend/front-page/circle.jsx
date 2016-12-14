import * as React from 'react';

const Circle = ({children}) => {
  const circleStyle = {
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    width: '30vw',
    height: '30vw',
    backgroundColor: 'darkseagreen',
    marginTop: '5vw'
  };

  const center = {
    alignSelf: 'center'
  };

  return (
    <div style={circleStyle}>
      <div style={center}>
        <h3>{children}</h3>
      </div>
    </div>
  )
};

export default Circle;
