import * as React from 'react';

const Name = ({children}) => {
  const nameStyle = {
    margin: '.5em 0'
  };

  return (
    <h3 style={nameStyle}>
        {children}
    </h3>
  )
};

export default Name;
