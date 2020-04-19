import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import RMDBLogo from '../../assets/svg/logo/logo-512.svg';
import TMDBLogo from '../../assets/svg/logo/tmdb.svg';

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyledRMDBLogo src={RMDBLogo} alt="i" />
        </Link>
        <StyledTMDBLogo src={TMDBLogo} alt="i" />
      </div>
    </StyledHeader>
  );
};

// css
const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

const StyledRMDBLogo = styled.img`
  width: 64px;
  margin-top: 10px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

const StyledTMDBLogo = styled.img`
  width: 122px;
  margin-top: 25px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;

export default Header;
