import { Box, Container } from '@chakra-ui/react';
import ThemeSwitchButton from '../themeSwitchButton';
import Contact from '../contactMe';
const Footer = () => {
  return (
    <Container>
      <Box
        pos="fixed"
        top="auto"
        right="auto"
        bottom="0"
        left="0"
        mb={30}
        ml={40}
      >
        <ThemeSwitchButton />
      </Box>
      <Contact mobile="none" desktop="block" />
      <Box my="100px" align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Emmanuel R. Oppong. All Rights
        Reserved.
      </Box>
    </Container>
  );
};

export default Footer;
