import React from 'react';
import { Link } from '@reach/router';
import { useTranslation } from 'react-i18next';

const NoResults = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t('noResultsTitle')}</h2>
      <p>{t('noResultsText')}</p>
      <p>
        <Link to="/">{t('noResultsLink')}</Link>
      </p>
    </>
  );
};

export { NoResults };
