import * as React from 'react';

const Title = ({children}) => {
  const titleStyle = {
    margin: '.5em 0'
  };

  return (
    <h2 style={titleStyle}>
        {children}
    </h2>
  )
};

export default Title;
