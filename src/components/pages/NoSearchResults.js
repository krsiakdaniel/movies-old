import React from 'react';
import Emoji from 'a11y-react-emoji';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NoSearchResults = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>
        {t('NoSearchResultsTitle')}
        <Emoji symbol="🤔" />
      </h2>
      <p>{t('NoSearchResultsText')}</p>
      <p>
        <Link to="/">{t('linkHomepage')}</Link>
      </p>
    </>
  );
};

export { NoSearchResults };
