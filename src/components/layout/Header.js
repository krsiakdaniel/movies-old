import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import LogoMovies from '../../assets/svg/logo/logo-512.svg';
import LogoTmdb from '../../assets/svg/logo/tmdb.svg';

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyledLogoMovies src={LogoMovies} alt="Movies" />
          <span>Movies</span>
        </Link>
        <StyledLogoTmdb src={LogoTmdb} alt="TMDb" />
      </div>
    </StyledHeader>
  );
};

// css
const StyledHeader = styled.div`
  background: #27ae60;
  box-shadow: 0 0 7px 0 rgba(26, 46, 86, 0.1);

  .header-content {
    max-width: 1200px;
    padding: 16px;
    margin: 0 auto;

    a {
      color: #fff;
      font-size: 40px;
    }

    a:hover img {
      transition: all 0.4s;
      transform: rotate(180deg);
    }

    @media screen and (max-width: 480px) {
      padding: 16px 24px;

      a {
        font-size: 32px;
      }
    }
  }
`;

const StyledLogoMovies = styled.img`
  // TODO: remove floats, use flexbox
  float: left;
  width: 64px;
  margin-right: 16px;
  transition: all 0.4s;

  :hover {
    transform: rotate(180deg);
  }

  @media screen and (max-width: 480px) {
    width: 48px;
  }
`;

const StyledLogoTmdb = styled.img`
  float: right;
  width: 128px;

  @media screen and (max-width: 480px) {
    width: 80px;
    position: relative;
    top: 8px;
  }
`;

export { Header };
