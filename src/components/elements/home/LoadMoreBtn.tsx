import React from 'react'
import { Box, Button } from '@chakra-ui/react'

type Props = {
  text: string
  callback: React.MouseEventHandler<HTMLElement>
}

const LoadMoreBtn = ({ text, callback }: Props) => {
  return (
    <Box>
      <Button type="button" colorScheme="green" onClick={callback}>
        {text}
      </Button>
    </Box>
  )
}

export { LoadMoreBtn }
