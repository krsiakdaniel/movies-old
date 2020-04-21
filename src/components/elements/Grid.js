import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Grid = ({ header, children }) => {
  return (
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
  );
};

Grid.propTypes = {
  header: PropTypes.string,
};

// css
const StyledGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto 16px auto;
  padding: 0 16px;

  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }
`;

const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(100px, 1fr));
  grid-gap: 16px;
  position: relative;

  .grid-element {
    animation: animateGrid 0.5s;
  }

  @keyframes animateGrid {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  // TODO: breakpoints 480, 576, 768, 992, 1200, 1600

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(6, minmax(100px, 1fr));
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    grid-gap: 16px;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  // TODO: on mobile show actors in rows
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Grid;
