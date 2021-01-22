import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
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
    <Box>
      <Box>
        <Link to={routes.home.path} onClick={refreshPage}>
          <Image src={imgMovies} alt={t('alt.movies')} />
          <Text>{t('shared.app.title')}</Text>
        </Link>
        <Image src={imgTMDb} alt={t('alt.TMDb')} />
      </Box>
    </Box>
  );
};

export { Header };
