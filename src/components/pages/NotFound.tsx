import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/core';
import Emoji from 'a11y-react-emoji';

import imgNoMovie from 'assets/svg/error/404.svg';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t('error404.title')} | {t('shared.app.title')}
        </title>
      </Helmet>
      <div css={cssNotFound}>
        <h1>
          {t('error404.title')} <Emoji symbol="😕" />
        </h1>
        <p css={cssNotFoundText}>{t('error404.text')}</p>
        <img src={imgNoMovie} css={cssNotFoundImg} alt={t('alt.error404')} />
      </div>
    </>
  );
};

const cssNotFound = css({
  maxWidth: 1200,
  margin: '32px auto',
  padding: 32,
  textAlign: 'center',
  background: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12)',
  borderRadius: 8,

  '@media screen and (max-width: 1200px)': {
    margin: '32px 24px',
  },
});

const cssNotFoundText = css({
  marginBottom: 32,
});

const cssNotFoundImg = css({
  width: 128,
  margin: '0 auto',
});

export { NotFound };
