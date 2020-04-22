import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Navigation = ({ movie }) => {
  return (
    <StyledNavigation>
      <div className="navigation-content">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>/</li>
          <li>{movie}</li>
        </ul>
      </div>
    </StyledNavigation>
  );
};

Navigation.propTypes = {
  movie: PropTypes.string,
};

// css
const StyledNavigation = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  .navigation-content {
    padding: 16px;
    width: 100%;

    li {
      display: inline-block;
      padding-right: 8px;
    }

    @media screen and (max-width: 480px) {
      li {
        font-size: 16px;
      }
    }
  }
`;

export { Navigation };
