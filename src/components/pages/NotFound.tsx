import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t('error404Title')}</h2>
      <p>{t('error404Text')}</p>
      <p>
        <Link to="/">{t('linkHomepage')}</Link>
      </p>
    </>
  );
};

export { NotFound };
