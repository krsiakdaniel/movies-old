import React from 'react';
import { Box } from '@chakra-ui/core';

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Box maxWidth={1200} my={0} mx="auto" padding={4}>
        {children}
      </Box>
    </>
  );
};

export default AppLayout;
