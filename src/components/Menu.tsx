import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { List, ListItem } from '@chakra-ui/core';

const Menu = () => {
  return (
    <List styleType="none" mb={4}>
      <ListItem>
        <Link to="/">Movies</Link>
      </ListItem>
      <ListItem>
        <Link to="/about">About</Link>
      </ListItem>
    </List>
  );
};

export default withRouter(Menu);
