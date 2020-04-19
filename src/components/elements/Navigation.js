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
  max-width: 1280px;
  margin: 0 auto;

  .navigation-content {
    padding: 10px 20px;
    width: 100%;

    ul {
      li {
        display: inline-block;
        padding-right: 10px;
        a {
          color: #16d47b;
        }
      }
    }
  }
`;

export default Navigation;
