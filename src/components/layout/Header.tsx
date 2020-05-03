import React from 'react';
import { Box, Image } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { pageUrls } from 'config';

import imgMovies from 'assets/svg/logo/logo-512.svg';
import imgTMDb from 'assets/svg/logo/TMDb.svg';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Box css={cssHeaderRow}>
      <Box css={cssHeader}>
        <Link to={pageUrls.home} css={cssHeaderLink}>
          <Image src={imgMovies} css={cssLogoMovies} alt={t('alt.movies')} />
          <span>{t('shared.app.title')}</span>
        </Link>
        <Image src={imgTMDb} css={cssLogoTMDb} alt={t('alt.TMDb')} />
      </Box>
    </Box>
  );
};

// TODO: use chakra
const cssHeaderRow = css({
  width: '100%',
  background: '#2d3748',
});

const cssHeader = css({
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
