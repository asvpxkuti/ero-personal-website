import { Flex, Text, Heading, useColorModeValue } from '@chakra-ui/react';

const ProfileDetail = ({ title, text }) => {
  const color = useColorModeValue('#ff007f', 'brightTeal');
  return (
    <Flex pb={2}>
      <Heading pr={2} color={color} as="h5" size="sm">
        {title}
      </Heading>
      <Text>{text}</Text>
    </Flex>
  );
};

export default ProfileDetail;
