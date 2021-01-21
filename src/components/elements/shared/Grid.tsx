import React from 'react';
import { Box, Heading, Grid as GridChakra } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { cypress } from 'config';

type Props = {
  header: string;
  children: React.ReactNode;
};

const Grid = ({ header, children }: Props) => {
  return (
    <Box css={cssGridRow}>
      <Heading css={cssGridHeading} data-cy={cypress.pageHeading}>
        {header}
      </Heading>
      <GridChakra css={cssGrid}>{children}</GridChakra>
    </Box>
  );
};

const cssGridRow = css({
  maxWidth: 1200,
  margin: '0 auto 16px auto',
  padding: '0 16px',

  '@media screen and (max-width: 768px)': {
    padding: '0 24px',
  },
});

const cssGridHeading = css({
  marginBottom: 16,
});

const cssGrid = css({
  gridTemplateColumns: 'repeat(8, minmax(100px, 1fr))',
  gridGap: 8,

  '@media screen and (max-width: 1200px)': {
    gridTemplateColumns: 'repeat(7, minmax(100px, 1fr))',
  },

  '@media screen and (max-width: 992px)': {
    gridTemplateColumns: 'repeat(6, minmax(100px, 1fr))',
  },

  '@media screen and (max-width: 768px)': {
    gridTemplateColumns: 'repeat(5, minmax(100px, 1fr))',
  },

  '@media screen and (max-width: 576px)': {
    gridTemplateColumns: 'repeat(4, minmax(100px, 1fr))',
  },

  /// TODO: on mobile - img on left, info text on right
  '@media screen and (max-width: 480px)': {
    gridTemplateColumns: 'repeat(1, auto)',
    // gridAutoFlow: 'column',
  },
});

export { Grid };
