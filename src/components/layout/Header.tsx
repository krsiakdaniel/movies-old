import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import LogoMovies from '../../assets/svg/logo/logo-512.svg';
import LogoTmdb from '../../assets/svg/logo/tmdb.svg';

const Header = () => {
  const { t } = useTranslation();

  return (
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyledLogoMovies src={LogoMovies} alt="Movies" />
          <span>{t('headerTitle')}</span>
        </Link>
        <StyledLogoTmdb src={LogoTmdb} alt="TMDb" />
      </div>
    </StyledHeader>
  );
};

// css
const StyledHeader = styled.div`
  background: #2c3e50;

  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px;

    a {
      color: #fff;
      font-size: 32px;
    }

    a:hover img {
      transition: all 0.4s;
      transform: rotate(180deg);
    }

    @media screen and (max-width: 768px) {
      padding: 16px 24px;
    }
    @media screen and (max-width: 480px) {
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
