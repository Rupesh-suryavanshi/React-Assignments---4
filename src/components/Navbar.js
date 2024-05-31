import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex } from '@chakra-ui/react';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <Flex as="nav" p="4" bg="#fff" color="#000">
      <Box>
        <Link to="/">Home</Link>
      </Box>
      <Box ml="4">
        <Link to="/about">About</Link>
      </Box>
      <Box ml="4">
        <Link to="/contact">Contact</Link>
      </Box>
      <Box ml="4">
        <Link to="/tickets">Tickets</Link>
      </Box>
      {isLoggedIn ? (
        <Button ml="4" onClick={logout}>
          LOGOUT
        </Button>
      ) : (
        <Box ml="4">
          <Link to="/login">Login</Link>
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
