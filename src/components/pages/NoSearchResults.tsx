/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import Emoji from 'a11y-react-emoji';

const NoSearchResults = () => {
  const { t } = useTranslation();

  return (
    <div css={cssNoSearchResults}>
      <h2>
        {t('NoSearchResultsTitle')}
        <Emoji symbol="🤔" />
      </h2>
      <p>{t('NoSearchResultsText')}</p>
      <p>
        <Link to="/">{t('linkHomepage')}</Link>
      </p>
    </div>
  );
};

const cssNoSearchResults = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;

  @media screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export { NoSearchResults };
