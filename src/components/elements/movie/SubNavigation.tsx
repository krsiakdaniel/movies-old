import React from 'react';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

type Props = {
  movie: string;
};

const SubNavigation = ({ movie }: Props) => {
  const { t } = useTranslation();

  return (
    <div css={cssSubNavigation}>
      <ul>
        <li>
          <Link to="/">{t('navHome')}</Link>
        </li>
        <li>/</li>
        <li>{movie}</li>
      </ul>
    </div>
  );
};

const cssSubNavigation = css`
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

export { SubNavigation };
