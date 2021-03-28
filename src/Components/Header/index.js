import React from 'react';
import {ReactComponent as Logo} from 'assets/images/logo.svg';

const Header = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-auto">
        <Logo />
      </div>
      <div className="col-auto"></div>
    </div>
  );
};

export default Header;