import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from 'a11y-react-emoji';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// TODO: add texts to i18n
// TODO: create config for url '/about'
const Footer = () => {
  const { t } = useTranslation();
  const url = '/about';

  return (
    <>
      <StyledFooter>
        <p>
          Made in <Emoji symbol="🇨🇿" label="Czech Republic" />
          by <Link to={url}>Krsiak Daniel</Link>
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
    margin: 0 16px 16px;
    font-size: 10px;
    color: #bdc3c7;

    @media screen and (max-width: 768px) {
      margin: 0 24px 16px;
    }
  }
`;

export { Footer };
