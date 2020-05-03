import React from 'react';
import { Heading, Image, Text } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import Emoji from 'a11y-react-emoji';

import imgNoMovie from 'assets/svg/error/404.svg';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div css={cssNotFound}>
      <Heading>
        {t('error404.title')} <Emoji symbol="😕" />
      </Heading>
      <Text css={cssNotFoundText}>{t('error404.text')}</Text>
      <Image src={imgNoMovie} css={cssNotFoundImg} alt={t('alt.error404')} />
    </div>
  );
};

// TODO: use chakra
const cssNotFound = css({
  maxWidth: 1200,
  margin: '32px auto',
  padding: 32,
  textAlign: 'center',
  background: '#fff',
  border: '1px solid #e2e8f0',
  borderRadius: 8,
});

const cssNotFoundText = css({
  marginBottom: 16,
});

const cssNotFoundImg = css({
  width: 128,
  margin: '0 auto',
});

export { NotFound };
