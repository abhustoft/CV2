import * as React from 'react';
import Circle from './circle.jsx'

const FrontPage = () => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  };
  return (
    <div style={style}>
      <Circle>Myself</Circle>
      <Circle>Career</Circle>
    </div>
  )
};

export default FrontPage;
