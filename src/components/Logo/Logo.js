import React from 'react';
import { Box, Link, Text } from '@chakra-ui/react';

export default function Logo(props) {
  return (
    <Link href="/">
      <Box {...props}>
        <Text fontSize="lg" fontWeight="bold">
          Emmanuel R. Oppong
        </Text>
      </Box>
    </Link>
  );
}
