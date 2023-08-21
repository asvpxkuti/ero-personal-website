import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Stack,
  useColorModeValue, useDisclosure, CloseButton,
} from '@chakra-ui/react';
import React from 'react';
import Logo from '../Logo/Logo';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';
import NavItem from '../NavItem/NavItem';

const Navbar = () => {
  const navBgColour = useColorModeValue('#FFFFFF', '#202023');
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      as="nav"
      align="center"
      bg={navBgColour}
      justifyContent="space-between"
      p={4}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Box>
        <Logo />
      </Box>

      <Box>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'column', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NavItem href="/#about">About</NavItem>
          <NavItem href="/#projects">Projects</NavItem>
          <NavItem href="/#works">Works</NavItem>
          <NavItem
            display="inline-flex"
            alignItems="center"
            target="_blank"
            href="https://github.com/emmanuelrees90/ero-personal-website"
            pl={2}
            style={{ gap: 4 }}
          >
            <FaGithub />
            Source
          </NavItem>
        </Stack>
      </Box>

      <Box display={{ base: 'inline-block', md: 'none' }}>
        <Menu bg={navBgColour}>
          {!isOpen ? (
              <MenuButton
                  as={IconButton}
                  aria-label="Navigation Options"
                  onClick={onOpen}
                  icon={<HamburgerIcon />}
                  variant="outline"
              />
          ) : (
              <CloseButton onClick={onClose} />
          )}

          <MenuList>
            <MenuItem as={NavItem} href="/#about">
              About
            </MenuItem>
            <MenuItem as={NavItem} href="/#works">
              Projects
            </MenuItem>
            <MenuItem as={NavItem} href="/#projects">
              Works
            </MenuItem>
            <MenuItem
              as={NavItem}
              href="https://github.com/asvpxkuti/ero-personal-website"
            >
              View Source
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
export default Navbar;
