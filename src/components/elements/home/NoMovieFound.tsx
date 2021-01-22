import React from 'react'
import { useTranslation } from 'react-i18next'
import Emoji from 'a11y-react-emoji'
import { Box, Heading, Image, Text } from '@chakra-ui/react'

import imgError404 from 'assets/svg/error/no-movie.svg'

const NoMovieFound = () => {
  const { t } = useTranslation()

  return (
    <Box>
      <Box>
        <Box>
          <Heading>
            {t('noMovieFound.title')} <Emoji symbol="🤔" />
          </Heading>
          <Text>{t('noMovieFound.text')}</Text>
          <Image src={imgError404} alt={t('alt.noMovie')} />
        </Box>
      </Box>
    </Box>
  )
}

export { NoMovieFound }
