import React from 'react';
import { Link } from '@reach/router';

const NoResults = () => {
  return (
    <>
      <h2>No such movie</h2>
      <p>Seems there is no movie with the name you searched.</p>
      <p>
        <Link to="/">Go back to homepage</Link>
      </p>
    </>
  );
};

export { NoResults };
