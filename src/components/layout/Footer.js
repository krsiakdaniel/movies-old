import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// TODO: add texts to i18n
const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <StyledFooter>
        <p>
          Made in{' '}
          <span aria-hidden="true" role="img">
            🇨🇿
          </span>{' '}
          by <Link to="https://krsiak.cz/">Krsiak Daniel</Link>
        </p>
        <p className="tmdb">{t('footerTmdb')}</p>
      </StyledFooter>
    </>
  );
};

// css
const StyledFooter = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  p {
    text-align: center;
    font-size: 12px;
    margin-bottom: 8px;
  }

  .tmdb {
    font-size: 10px;
    color: #bdc3c7;
  }
`;

export { Footer };
