import React from 'react';
import { css } from '@emotion/core';

// TODO: use i18n
const About = () => {
  return (
    <div css={cssAbout}>
      <h2>About</h2>
      <p>
        Hi. My name is <strong>Krsiak Daniel</strong>. I really like movies. I
        watched just in cinema 100 movies in 10 years.
      </p>
    </div>
  );
};

const cssAbout = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;

  @media screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export { About };
