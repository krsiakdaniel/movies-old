import React from 'react';
import { Box, Text } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Emoji from 'a11y-react-emoji';
import { pageUrls } from 'config';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box css={cssFooter}>
      <Text fontSize="sm">
        {t('footer.madeIn')} <Emoji symbol="🇨🇿" label={t('footer.country')} />
        {t('footer.madeBy')}
        <Link to={pageUrls.about}>{t('shared.app.author')}</Link>
      </Text>
      <Text fontSize="xs" css={cssTMDb}>
        {t('footer.api')}
      </Text>
    </Box>
  );
};

// TODO: use chakra
const cssFooter = css({
  textAlign: 'center',
});

const cssTMDb = css({
  color: '#bdc3c7',
});

export { Footer };
