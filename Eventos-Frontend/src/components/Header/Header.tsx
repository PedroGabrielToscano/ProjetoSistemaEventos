import React from 'react';
import { HeaderContainer, Logo, Nav, NavItem } from './styles';
import logoFigure from '../../assets/figures/logo.png'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logoFigure}></Logo>
      <Nav>
        <NavItem>IngressaMais</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
