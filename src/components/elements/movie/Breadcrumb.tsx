import React from 'react';
import {
  Box,
  Breadcrumb as BreadcrumbChakra,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { routes } from 'routes';

type Props = {
  movieTitle: string;
};

// TODO: make links work with ROUTER
const Breadcrumb = ({ movieTitle }: Props) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box>
        <BreadcrumbChakra>
          <BreadcrumbItem>
            <BreadcrumbLink href={routes.home.path}>
              {t('breadcrumb.home')}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{movieTitle}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbChakra>
      </Box>
    </Box>
  );
};

export { Breadcrumb };
