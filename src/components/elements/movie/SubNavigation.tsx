import React from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/core';
import { css } from '@emotion/core';
// import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { routes } from 'routes';

type Props = {
  movieTitle: string;
};

// TODO: make links work with ROUTER
const SubNavigation = ({ movieTitle }: Props) => {
  const { t } = useTranslation();

  return (
    <Box css={cssSubNavigationRow}>
      <Box css={cssSubNavigation}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href={routes.home.path}>
              {t('subnav.home')}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{movieTitle}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Box>
  );
};

// TODO: use chakra
const cssSubNavigationRow = css({
  margin: '0 auto',
  textAlign: 'center',
  maxWidth: 1200,
});

const cssSubNavigation = css({
  maxWidth: 1200,
  margin: '0 auto',
  padding: '16px',
  fontSize: 12, // xs
  textAlign: 'left',

  '@media screen and (max-width: 768px)': {
    padding: '16px 24px',
  },
});

export { SubNavigation };
