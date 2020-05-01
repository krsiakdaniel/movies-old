import React from 'react';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import Emoji from 'a11y-react-emoji';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div css={cssNotFound}>
      <h2>
        {t('error404Title')} <Emoji symbol="⚠️" />
      </h2>
      <p>{t('error404Text')}</p>
      <p>
        <Link to="/">{t('linkHome')}</Link>
      </p>
    </div>
  );
};

const cssNotFound = css({
  maxWidth: 1200,
  margin: '0 auto',
  padding: 16,

  '@media screen and (max-width: 768px)': {
    padding: '16px 24px',
  },
});

export { NotFound };
