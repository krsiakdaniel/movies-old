/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import { cypress } from 'utils';

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

// TODO: use flexbox
const cssGrid = css`
  max-width: 1200px;
  margin: 0 auto 16px auto;
  padding: 0 16px;

  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }
`;

const cssGridContent = css`
  display: grid;
  grid-template-columns: repeat(8, minmax(100px, 1fr));
  grid-gap: 16px;
  position: relative;

  .grid-element {
    animation: animateGrid 0.5s;
  }

  @keyframes animateGrid {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  // TODO: breakpoints 480, 576, 768, 992, 1200, 1600
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(7, minmax(100px, 1fr));
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(6, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    grid-gap: 16px;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  // TODO: on mobile show actors in rows
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export { Grid };
