import * as React from 'react';

const Header = ({children}) => {
  const headerStyle = {
    height: '25vh',
    textAlign: 'center',
    width: '100vw'
  };

  const center = {

  };

  return (
    <div style={headerStyle}>
      <div style={center}>
        {children}
      </div>
    </div>
  )
};

export default Header;
