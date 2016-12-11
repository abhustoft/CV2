import * as React from 'react';

const Circle = ({children}) => {
  const circleStyle = {
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    width: '35vw',
    height: '35vw',
    backgroundColor: 'red',
    marginTop: '1em'
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
