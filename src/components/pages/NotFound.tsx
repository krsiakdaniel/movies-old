/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div css={cssNotFound}>
      <h2>{t('error404Title')}</h2>
      <p>{t('error404Text')}</p>
      <p>
        <Link to="/">{t('linkHomepage')}</Link>
      </p>
    </div>
  );
};

const cssNotFound = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;

  @media screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export { NotFound };
