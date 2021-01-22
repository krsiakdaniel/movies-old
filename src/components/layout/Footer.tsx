import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Emoji from 'a11y-react-emoji';
import { routes } from 'routes';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Text fontSize="sm">
        {t('footer.madeIn')} <Emoji symbol="🇨🇿" label={t('footer.country')} />
        {t('footer.madeBy')}
        <Link to={routes.about.path}>{t('shared.app.author')}</Link>
      </Text>
      <Text fontSize="xs">{t('footer.api')}</Text>
    </Box>
  );
};

export { Footer };
