import React from 'react';
import { HeaderContainer, Logo, Nav, NavItem } from './styles';
import logoFigure from '../../assets/figures/logo.png'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logoFigure}></Logo>
      <Nav>
        <NavItem>SMURFS</NavItem>
        <NavItem>SKINS</NavItem>
        <NavItem>FAQ</NavItem>
        <NavItem>CONTATO</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
