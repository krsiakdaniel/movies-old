import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Heading, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>
          {t('about.title')} | {t('shared.app.title')}
        </title>
      </Helmet>
      <Box>
        <Heading>{t('about.title')}</Heading>
        <Text>
          {t('about.text1')} <strong>{t('shared.app.author')}</strong>{' '}
          {t('about.text2')}
        </Text>
      </Box>
    </>
  )
}

export { About }
