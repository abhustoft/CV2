import * as React from 'react';
import Circle from './circle.jsx'

const FrontPage = () => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingLeft: '5vw',
    paddingRight: '5vw'
  };
  return (
    <div style={style}>
      <Circle>Myself</Circle>
      <Circle>Career</Circle>
      <Circle>Projects</Circle>
      <Circle>Tech</Circle>
    </div>
  )
};

export default FrontPage;
