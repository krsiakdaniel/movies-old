import React from 'react';
import { Box, Image, Text } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { routes } from 'routes';

import imgMovies from 'assets/svg/logo/logo-512.svg';
import imgTMDb from 'assets/svg/logo/TMDb.svg';

const refreshPage = () => {
  if (window.location.hash === '#/') {
    window.location.reload(true);
  }
};

const Header = () => {
  const { t } = useTranslation();

  return (
    <Box css={cssHeaderRow}>
      <Box css={cssHeader}>
        <Link to={routes.home.path} onClick={refreshPage} css={cssHeaderLink}>
          <Image src={imgMovies} css={cssLogoMovies} alt={t('alt.movies')} />
          <Text css={cssHeaderText}>{t('shared.app.title')}</Text>
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
  minHeight: 80,

  '@media screen and (max-width: 768px)': {
    padding: '16px 24px',
  },
});

const cssHeaderLink = css({
  ':hover img': {
    transition: 'all 0.4s',
    transform: 'rotate(180deg)',
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

const cssHeaderText = css({
  color: '#fff',
  fontSize: 32,
  display: 'inline-block',

  '@media screen and (max-width: 480px)': {
    fontSize: 28,
    position: 'relative',
    top: 5,
  },
});

const cssLogoTMDb = css({
  float: 'right',
  width: 160,
  position: 'relative',
  top: 18,

  '@media screen and (max-width: 480px)': {
    width: 96,
    top: 25,
  },
});

export { Header };
