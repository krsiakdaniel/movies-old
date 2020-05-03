import React from 'react';
import { Helmet } from 'react-helmet';
import { Heading, Image, Text } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import Emoji from 'a11y-react-emoji';

import imgNoMovie from 'assets/svg/error/404.svg';

const Page404 = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t('error.page404.title')} | {t('shared.app.title')}
        </title>
      </Helmet>
      <div css={cssPage404}>
        <Heading>
          {t('error.page404.title')} <Emoji symbol="😕" />
        </Heading>
        <Text css={cssPage404Text}>{t('error.page404.text')}</Text>
        <Image src={imgNoMovie} css={cssPage404Img} alt={t('alt.page404')} />
      </div>
    </>
  );
};

// TODO: use chakra
const cssPage404 = css({
  maxWidth: 1200,
  margin: '32px auto',
  padding: 32,
  textAlign: 'center',
  background: '#fff',
  border: '1px solid #e2e8f0',
  borderRadius: 8,
});

const cssPage404Text = css({
  marginBottom: 16,
});

const cssPage404Img = css({
  width: 128,
  margin: '0 auto',
});

export { Page404 };
