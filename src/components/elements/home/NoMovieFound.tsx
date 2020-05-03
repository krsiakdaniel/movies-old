import React from 'react';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/core';
import Emoji from 'a11y-react-emoji';

import imgError404 from 'assets/svg/error/no-movie.svg';

const NoMovieFound = () => {
  const { t } = useTranslation();

  return (
    <div css={cssNoMovieFound}>
      <h1>
        {t('noMovieFound.title')} <Emoji symbol="🤔" />
      </h1>
      <p css={cssNoMovieText}>{t('noMovieFound.text')}</p>
      <img src={imgError404} css={cssNoMovieImg} alt={t('alt.noMovie')} />
    </div>
  );
};

const cssNoMovieFound = css({
  maxWidth: 1200,
  margin: '0 auto 32px auto',
  padding: 32,
  textAlign: 'center',
  background: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12)',
  borderRadius: 8,

  '@media screen and (max-width: 1200px)': {
    margin: '0 24px 32px 24px',
  },
});

const cssNoMovieText = css({
  marginBottom: 32,
});

const cssNoMovieImg = css({
  width: 128,
  margin: '0 auto',
});

export { NoMovieFound };
