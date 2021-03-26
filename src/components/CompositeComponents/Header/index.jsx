import React from 'react';

import logoImg from '../../../assets/logo/cyberLogo_1.png';
import avatarProfile from '../../../assets/avatars/av1.png';
import cyberDivider from '../../../assets/style-line.png';
import HeaderContainer from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={logoImg} alt="Cyberpunk" />
        <img src={avatarProfile} alt="Avatar" />
      </div>
      <img src={cyberDivider} alt="divider" />
    </HeaderContainer>
  );
};

export default Header;
