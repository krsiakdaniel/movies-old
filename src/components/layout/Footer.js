import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

// TODO: add 'useTranslation'
const Footer = () => {
  return (
    <>
      <StyledFooter>
        <p>
          Made in{' '}
          <span aria-hidden="true" role="img">
            🇨🇿
          </span>{' '}
          by <Link to="https://krsiak.cz/">Krsiak Daniel</Link>
        </p>
      </StyledFooter>
    </>
  );
};

// css
const StyledFooter = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  p {
    text-align: center;
    font-size: 12px;
  }
`;

export { Footer };
