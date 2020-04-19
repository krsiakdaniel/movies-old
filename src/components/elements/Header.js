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
          <span>Movies</span>
        </Link>
        <StyledTMDBLogo src={TMDBLogo} alt="i" />
      </div>
    </StyledHeader>
  );
};

// css
const StyledHeader = styled.div`
  background: #27ae60;
  box-shadow: 0 0 7px 0 rgba(26, 46, 86, 0.1);

  .header-content {
    max-width: 1280px;
    padding: 16px 0px;
    margin: 0 auto;

    a {
      color: #fff;
      font-size: 40px;
    }

    a:hover img {
      transition: all 0.4s;
      transform: rotate(180deg);
    }
  }
`;

const StyledRMDBLogo = styled.img`
  // TODO: remove floats, use flexbox
  float: left;
  width: 64px;
  margin-right: 16px;
  transition: all 0.4s;

  :hover {
    transform: rotate(180deg);
  }
`;

const StyledTMDBLogo = styled.img`
  float: right;
  width: 128px;
  margin-top: 8px;
`;

export default Header;
