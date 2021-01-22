import React, { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Box } from '@chakra-ui/react'

import { Header, Footer } from './index'

type Props = {
  children: ReactNode
}

export const AppLayout = ({ children }: Props) => {
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
