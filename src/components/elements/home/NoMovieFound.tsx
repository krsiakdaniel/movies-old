import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import Emoji from 'a11y-react-emoji';

import imgError404 from 'assets/svg/error/no-movie.svg';

const NoMovieFound = () => {
  const { t } = useTranslation();

  return (
    <Box css={cssNoMovieFoundRow}>
      <Box css={cssNoMovieFoundWrap}>
        <Box css={cssNoMovieFound}>
          <Heading>
            {t('noMovieFound.title')} <Emoji symbol="🤔" />
          </Heading>
          <Text css={cssNoMovieText}>{t('noMovieFound.text')}</Text>
          <Image src={imgError404} css={cssNoMovieImg} alt={t('alt.noMovie')} />
        </Box>
      </Box>
    </Box>
  );
};

// TODO: use chakra
const cssNoMovieFoundRow = css({
  width: '100%',
});

const cssNoMovieFoundWrap = css({
  padding: '0 16px',
  maxWidth: 1200,
  margin: '0 auto',
});

const cssNoMovieFound = css({
  padding: 32,
  textAlign: 'center',
  background: '#fff',
  border: '1px solid #e2e8f0',
  borderRadius: 8,
  marginBottom: 32,
});

const cssNoMovieText = css({
  marginBottom: 16,
});

const cssNoMovieImg = css({
  width: 128,
  margin: '0 auto',
});

export { NoMovieFound };
