import React from 'react';
import Emoji from 'a11y-react-emoji';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoSearchResults = () => {
  const { t } = useTranslation();

  return (
    <NoSearchResultsWrapperCss>
      <h2>
        {t('NoSearchResultsTitle')}
        <Emoji symbol="🤔" />
      </h2>
      <p>{t('NoSearchResultsText')}</p>
      <p>
        <Link to="/">{t('linkHomepage')}</Link>
      </p>
    </NoSearchResultsWrapperCss>
  );
};

const NoSearchResultsWrapperCss = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;

  @media screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export { NoSearchResults };
