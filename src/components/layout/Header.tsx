import React from 'react';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { pageUrls } from 'config';

import LogoMovies from 'assets/svg/logo/logo-512.svg';
import LogoTMDb from 'assets/svg/logo/TMDb.svg';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div css={cssHeader}>
      <div css={cssHeaderContent}>
        <Link to={pageUrls.home} css={cssHeaderLink}>
          <img src={LogoMovies} css={cssLogoMovies} alt={t('alt.movies')} />
          <span>{t('shared.app.title')}</span>
        </Link>
        <img src={LogoTMDb} css={cssLogoTMDb} alt={t('alt.TMDb')} />
      </div>
    </div>
  );
};

const cssHeader = css({
  background: '#2c3e50',
});

const cssHeaderContent = css({
  maxWidth: 1200,
  margin: '0 auto',
  padding: 16,

  '@media screen and (max-width: 768px)': {
    padding: '16px 24px',
  },
});

const cssHeaderLink = css({
  color: '#fff',
  fontSize: 32,

  ':hover img': {
    transition: 'all 0.4s',
    transform: 'rotate(180deg)',
  },

  '@media screen and (max-width: 480px)': {
    fontSize: 28,

    span: {
      position: 'relative',
      top: 5,
    },
  },
});

// TODO: remove floats, use flexbox
const cssLogoMovies = css({
  float: 'left',
  width: 48,
  marginRight: 16,
  transition: 'all 0.4s',

  ':hover': {
    transform: 'rotate(180deg)',
  },
});

const cssLogoTMDb = css({
  float: 'right',
  width: 200,
  position: 'relative',
  top: 18,

  '@media screen and (max-width: 480px)': {
    width: 100,
    top: 24,
  },
});

export { Header };
