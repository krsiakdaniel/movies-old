import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

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
  }
`;

export { Footer };
