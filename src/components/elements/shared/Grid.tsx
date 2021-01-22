import React from 'react';
import { Box, Heading, Grid as GridChakra } from '@chakra-ui/react';

import { cypress } from 'config';

type Props = {
  header: string;
  children: React.ReactNode;
};

const Grid = ({ header, children }: Props) => {
  return (
    <Box>
      <Heading data-cy={cypress.pageHeading}>{header}</Heading>
      <GridChakra>{children}</GridChakra>
    </Box>
  );
};

export { Grid };
