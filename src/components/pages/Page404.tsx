import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import Emoji from 'a11y-react-emoji'
import { Flex, Heading, Image, Text } from '@chakra-ui/react'

import imgNoMovie from 'assets/svg/error/404.svg'

export const Page404 = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>
          {t('error.page404.title')} | {t('shared.app.title')}
        </title>
      </Helmet>
      <Flex>
        <Heading>
          {t('error.page404.title')} <Emoji symbol="😕" />
        </Heading>
        <Text>{t('error.page404.text')}</Text>
        <Image src={imgNoMovie} alt={t('alt.page404')} />
      </Flex>
    </>
  )
}
