import React from 'react'
import { Helmet } from 'react-helmet'
import { Box } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { Header, Footer } from './index'

type Props = {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('shared.app.title')}</title>
      </Helmet>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  )
}

export { AppLayout }
