import React from 'react';
import banner from '../../Branding/banner.png';

const Header = () => {
  return (
    <div className="header">
      <img src={banner} alt="" className="banner" />
    </div>
  );
};

export default Header;