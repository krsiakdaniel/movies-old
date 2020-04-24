import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NoSearchResults = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t('NoSearchResultsTitle')}</h2>
      <p>{t('NoSearchResultsText')}</p>
      <p>
        <Link to="/">{t('linkHomepage')}</Link>
      </p>
    </>
  );
};

export { NoSearchResults };
