import * as React from 'react';

const Circle = ({children}) => {
  const circleStyle = {
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    width: '30vw',
    height: '30vw',
    backgroundColor: 'red',
    border: '1px solid green'
  };

  const center = {
    alignSelf: 'center'
  };

  return (
    <div style={circleStyle}>
      <div style={center}>
        {children}
      </div>
    </div>
  )
};

export default Circle;
