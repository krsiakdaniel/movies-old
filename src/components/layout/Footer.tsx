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
        {t('footerMadeBy')} <Link to={pageUrls.about}>{t('appAuthor')}</Link>
      </p>
      <p css={cssTMDb}>{t('footerTMDb')}</p>
    </div>
  );
};

const cssFooter = css({
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 16px',
  fontSize: 12,
  textAlign: 'center',

  '@media screen and (max-width: 768px)': {
    padding: '0 24px',
  },
});

const cssTMDb = css({
  fontSize: 10,
  color: '#bdc3c7',
});

export { Footer };
