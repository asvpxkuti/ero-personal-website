import {
  Box,
  Text,
  IconButton,
  Flex,
  Image,
  keyframes,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
const animation = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

const GridItem = ({ gitHubUrl, href, title, photo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const gridItemColor = useColorModeValue('whiteAlpha.900', 'brightTeal');
  const gridItemTextColor = useColorModeValue('blackAlpha.900', 'brightTeal');
  const showIconAnimation = `${animation} 1s`;
  return (
    <Box
      pos="relative"
      color={gridItemColor}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image borderRadius="12px" w="100%" h="100%" src={photo} alt="project" />
      <Text align="center" color={gridItemTextColor}>
        {title}
      </Text>
      <Flex
        pos="absolute"
        left="2%"
        bottom="2%"
        align="center"
        animation={isHovered ? showIconAnimation : 'none'}
      >
        {isHovered && (
          <>
            {gitHubUrl && (<Link color={gridItemColor} href={gitHubUrl} isExternal>
              <IconButton
                  cursor="pointer"
                  borderRadius={99}
                  variant="outline"
                  colorScheme={gridItemColor}
                  aria-label="GitHub Link"
                  icon={<FaGithub/>}
              />
            </Link>)}
            {href && (
              <Link color={gridItemColor} href={href} isExternal>
                <IconButton
                  cursor="pointer"
                  borderRadius={99}
                  mx={2}
                  variant="outline"
                  colorScheme={gridItemColor}
                  aria-label="View Url"
                  icon={<FaExternalLinkAlt />}
                />
              </Link>
            )}
          </>
        )}
      </Flex>
    </Box>
  );
};

export default GridItem;
