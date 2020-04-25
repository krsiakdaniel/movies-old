import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Navigation = ({ movie }) => {
  const { t } = useTranslation();

  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to="/">{t('navHome')}</Link>
        </li>
        <li>/</li>
        <li>{movie}</li>
      </ul>
    </StyledNavigation>
  );
};

Navigation.propTypes = {
  movie: PropTypes.string,
};

// css
const StyledNavigation = styled.div`
  display: flex;
  background: #fff;

  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  width: 100%;

  li {
    display: inline-block;
    padding-right: 8px;
  }

  @media screen and (max-width: 768px) {
    padding: 16px 24px;

    li {
      font-size: 16px;
    }
  }
`;

export { Navigation };
