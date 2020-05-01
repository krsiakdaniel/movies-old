import React from 'react';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div css={cssAbout}>
      <h2>{t('aboutTitle')}</h2>
      <p>
        {t('aboutText1')} <strong>{t('appAuthorName')}</strong>{' '}
        {t('aboutText2')}
      </p>
    </div>
  );
};

const cssAbout = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;

  @media screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export { About };
