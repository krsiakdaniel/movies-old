import React from 'react';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import Emoji from 'a11y-react-emoji';
import { pageUrls } from 'config';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div css={cssFooter}>
      <p>
        {t('footerMadeIn')} <Emoji symbol="🇨🇿" label="Czech Republic" />
        {t('footerMadeBy')}{' '}
        <Link to={pageUrls.about}>{t('appAuthorName')}</Link>
      </p>
      <p className="tmdb">{t('footerTmdb')}</p>
    </div>
  );
};

const cssFooter = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;

  p {
    font-size: 12px;
    text-align: center;
  }

  .tmdb {
    font-size: 10px;
    color: #bdc3c7;
  }

  @media screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export { Footer };
