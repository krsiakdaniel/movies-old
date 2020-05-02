import React from 'react';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/core';
import Emoji from 'a11y-react-emoji';

import noMovieImg from '../../../assets/svg/error/no-movie.svg';

const NoMovieFound = () => {
  const { t } = useTranslation();

  return (
    <div css={cssNoMovieFound}>
      <h1>
        {t('noMovieFound.title')} <Emoji symbol="🤔" />
      </h1>
      <p css={cssNoMovieText}>{t('noMovieFound.text')}</p>
      <img src={noMovieImg} css={cssNoMovieImg} alt={t('noMovieFound.alt')} />
    </div>
  );
};

const cssNoMovieFound = css({
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 16px',
  textAlign: 'center',

  '@media screen and (max-width: 768px)': {
    padding: '0 24px',
  },
});

const cssNoMovieText = css({
  marginBottom: 32,
});

const cssNoMovieImg = css({
  width: 128,
  margin: '0 auto 32px auto',
});

export { NoMovieFound };
