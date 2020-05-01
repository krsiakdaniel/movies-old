import React from 'react';
import { css } from '@emotion/core';

import { cypress } from 'config';

type Props = {
  header: string;
  children: React.ReactNode;
};

const Grid = ({ header, children }: Props) => {
  return (
    <div css={cssGrid}>
      <h1 data-cy={cypress.pageHeading}>{header}</h1>
      <div css={cssGridContent}>{children}</div>
    </div>
  );
};

// TODO: on mobile show actors in rows
const cssGrid = css({
  maxWidth: 1200,
  margin: '0 auto 16px auto',
  padding: '0 16px',

  '@media screen and (max-width: 768px)': {
    padding: '0 24px',
  },
});

const cssGridContent = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(8, minmax(100px, 1fr))',
  gridGap: 16,
  position: 'relative',

  '.grid-element': {
    animation: 'animateGrid 0.5s',
  },

  // TODO: fix
  // @keyframes animateGrid {
  //   from {
  //     opacity: 0,
  //   }
  //   to {
  //     opacity: 1,
  //   }
  // }

  '@media screen and (max-width: 1200px)': {
    gridTemplateColumns: 'repeat(7, minmax(100px, 1fr))',
  },

  '@media screen and (max-width: 992px)': {
    gridTemplateColumns: 'repeat(6, minmax(100px, 1fr))',
  },

  '@media screen and (max-width: 768px)': {
    gridTemplateColumns: 'repeat(5, minmax(100px, 1fr))',
    gridGap: 16,
  },

  '@media screen and (max-width: 576px)': {
    gridTemplateColumns: 'repeat(4, minmax(100px, 1fr))',
  },

  '@media screen and (max-width: 480px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

export { Grid };
