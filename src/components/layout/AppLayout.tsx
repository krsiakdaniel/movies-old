import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Header, Footer } from './index';

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('headerTitle')}</title>
        <meta name="description" content="Todo on steroid!" />
      </Helmet>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export { AppLayout };
