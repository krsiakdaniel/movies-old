import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Navigation = ({ movie }) => {
  return (
    <>
      <StyledNavigation>
        <div className="navigation-content">
          <Link to="/">
            <p>Home</p>
          </Link>
          <p>|</p>
          <p>{movie}</p>
        </div>
      </StyledNavigation>
    </>
  );
};

Navigation.propTypes = {
  movie: PropTypes.string,
};

// css
const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #353535;
  color: #fff;

  .navigation-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;

    p {
      font-family: 'Abel', sans-serif;
      font-size: 22px;
      float: left;
      color: #fff;
      padding-right: 10px;
      text-decoration: none;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;

export default Navigation;
