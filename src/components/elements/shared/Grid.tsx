import React, { ReactNode } from 'react'
import { Box, Heading, Grid as GridChakra } from '@chakra-ui/react'

type Props = {
  header: string
  children: ReactNode
}

export const Grid = ({ header, children }: Props) => {
  return (
    <Box>
      <Heading data-cy="page-heading">{header}</Heading>
      <GridChakra>{children}</GridChakra>
    </Box>
  )
}
