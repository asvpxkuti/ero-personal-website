import { Box, Button, Container, Link } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import ThemeSwitchButton from '../themeSwitchButton';
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
      <Box align="center" my={4}>
        <Link href="mailto:eroppong@gmail.com">
          <Button leftIcon={<EmailIcon />} colorScheme="teal">
            Say Hello
          </Button>
        </Link>
      </Box>
      <Box my="100px" align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Emmanuel R. Oppong. All Rights
        Reserved.
      </Box>
    </Container>
  );
};

export default Footer;
