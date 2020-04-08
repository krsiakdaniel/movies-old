import React from 'react';
import { withRouter } from 'react-router-dom';
import { Heading, Text } from '@chakra-ui/core';

import MoviesData from 'data/movies.json';

const About = () => {
  return (
    <>
      <Heading as="h1">About</Heading>
      <Text>
        I am a big movie fan and just in cinema I watched 100 movies in 10
        years.
      </Text>
      <table className="table-movies">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Minutes</th>
            <th>Price</th>
            <th>Month</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {MoviesData.map((moviesItem: any) => {
            return (
              <tr>
                <td>{moviesItem.id}</td>
                <td>{moviesItem.title}</td>
                <td>{moviesItem.genre}</td>
                <td>{moviesItem.minutes}</td>
                <td>{moviesItem.price}</td>
                <td>{moviesItem.month}</td>
                <td>{moviesItem.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default withRouter(About);
