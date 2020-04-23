import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t('error404Title')}</h2>
      <p>{t('error404Text')}</p>
    </>
  );
};

export { NotFound };
