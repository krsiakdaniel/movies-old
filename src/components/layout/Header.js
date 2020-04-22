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
  //background: #27ae60;
  background: #2c3e50;
  box-shadow: 0 0 7px 0 rgba(26, 46, 86, 0.1);

  .header-content {
    max-width: 1200px;
    padding: 16px;
    margin: 0 auto;

    a {
      color: #fff;
      font-size: 32px;
    }

    a:hover img {
      transition: all 0.4s;
      transform: rotate(180deg);
    }

    @media screen and (max-width: 480px) {
      padding: 16px 24px;

      a {
        font-size: 28px;
        span {
          position: relative;
          top: 5px;
        }
      }
    }
  }
`;

const StyledLogoMovies = styled.img`
  // TODO: remove floats, use flexbox
  float: left;
  width: 48px;
  margin-right: 16px;
  transition: all 0.4s;

  :hover {
    transform: rotate(180deg);
  }
`;

const StyledLogoTmdb = styled.img`
  float: right;
  width: 200px;
  position: relative;
  top: 18px;

  @media screen and (max-width: 480px) {
    width: 100px;
    top: 24px;
  }
`;

export { Header };
