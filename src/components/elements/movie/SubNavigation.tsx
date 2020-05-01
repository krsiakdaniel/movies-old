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

const cssSubNavigation = css({
  display: 'flex',
  maxWidth: 1200,
  margin: '0 auto',
  padding: 16,
  width: '100%',
  background: '#fff',
  fontSize: 12,

  li: {
    display: 'inline-block',
    paddingRight: 8,
  },

  '@media screen and (max-width: 768px)': {
    padding: '16px 24px',

    li: {
      fontSize: 16,
    },
  },
});

export { SubNavigation };
