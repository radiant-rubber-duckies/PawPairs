import React from 'react';
import {
  StyledNavbar,
  StyledNavHeader,
  StyledLeftHeader,
  StyledRightHeader,
  StyledLogoHeader,
  StyledLogoLink,
  StyledLink,
  StyledLinksWrapper,
  StyledNavHeaderBottom,
} from './style';

const Nav = () => {
  return (
    <StyledNavbar>
      <StyledNavHeader>
        <StyledLeftHeader>PAW PAIRS 🐾</StyledLeftHeader>
        <StyledLogoHeader>
          <StyledLogoLink to="/home"></StyledLogoLink>
        </StyledLogoHeader>
        <StyledRightHeader>
          <StyledLinksWrapper>
            <StyledLink to="/login">LOGIN</StyledLink>
            <StyledLink to="/signup">SIGN UP</StyledLink>
          </StyledLinksWrapper>
        </StyledRightHeader>
      </StyledNavHeader>
      <StyledNavHeaderBottom>
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/profile">Profile</StyledLink>
        <StyledLink to="/search">Find Care</StyledLink>
      </StyledNavHeaderBottom>
    </StyledNavbar>
  );
};

export default Nav;
