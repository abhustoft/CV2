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

  const buttonClicked = (e) => {
    console.log('Clicked ', e);
  };

  return (
    <div style={circleStyle} role="button" onClick={buttonClicked}>
      <div style={center}>
        <h3>{children}</h3>
      </div>
    </div>
  )
};

export default Circle;
