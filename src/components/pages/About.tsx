import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <Box css={cssAbout}>
      <Heading>{t('aboutTitle')}</Heading>
      <Text>
        {t('aboutText1')} <strong>{t('appAuthor')}</strong> {t('aboutText2')}
      </Text>
    </Box>
  );
};

// TODO: use chakra
const cssAbout = css({
  maxWidth: 1200,
  margin: '0 auto',
  padding: 16,
});

export { About };
