import { Box, Button, Link } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const Contact = ({ mobile, desktop }) => (
  <Box
    display={{ base: mobile, md: desktop }}
    align="center"
    mt={{ base: '-6', md: '4' }}
  >
    <Link href="mailto:eroppong@gmail.com">
      <Button leftIcon={<EmailIcon />} colorScheme="teal">
        Say Hello
      </Button>
    </Link>
  </Box>
);

export default Contact;
