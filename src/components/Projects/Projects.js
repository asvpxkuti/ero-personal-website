import thumbNailPhoto from '../../assets/images/contents/portfolioThumbnail.jpg';
import { Container, SimpleGrid, Heading } from '@chakra-ui/react';
import GridItem from '../gridItem';

const Experience = () => {
  return (
    <Container id="projects" maxW="container.md" mb={100}>
      <Heading mb={6} size="4xl">
        Some Things I've Built
      </Heading>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
          title="Restaurant Landing Page"
          photo={thumbNailPhoto}
          gitHubUrl="https://github.com/asvpxkuti/ero-restaurant"
          href="https://www.ero-restaurant.com/"
        />
        <GridItem
          title="Chat GPT-3 Landing Page"
          photo={thumbNailPhoto}
          gitHubUrl="https://github.com/asvpxkuti/ero-chatgpt"
          href=""
        />
        <GridItem
          title="Social App Demo"
          photo={thumbNailPhoto}
          gitHubUrl="https://github.com/asvpxkuti/socialapp"
          href=""
        />
        <GridItem
          title="Junk Go Demo App"
          photo={thumbNailPhoto}
          gitHubUrl="https://github.com/asvpxkuti/junkgo"
          href=""
        />
      </SimpleGrid>
    </Container>
  );
};

export default Experience;
