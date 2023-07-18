import { Flex, Text, Heading, useColorModeValue } from '@chakra-ui/react';

const ProfileDetail = ({ title, text }) => {
  const color = useColorModeValue('#ff007f', 'brightTeal');
  return (
    <Flex align="center">
      <Heading pr={2} color={color} as="h5" size="sm">
        {title}
      </Heading>
      <Text>{text}</Text>
    </Flex>
  );
};

export default ProfileDetail;
