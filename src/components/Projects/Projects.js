import thumbNailPhoto from '../../assets/images/contents/portfolioThumbnail.jpg';
import { Container, SimpleGrid, Heading } from '@chakra-ui/react';
import GridItem from '../gridItem';

const Experience = () => {
  return (
    <Container id="projects" maxW="container.md" mb={100}>
      <Heading mb={6} size="4xl">
        Some Things I've Built
      </Heading>
      <SimpleGrid columns={[1, 2, 2]} gap={10}>
        <GridItem
          title="Restaurant Landing Page"
          photo={thumbNailPhoto}
          gitHubUrl="https://github.com/emmanuelrees90/ero-restaurant"
          href="https://www.ero-restaurant.com/"
        />
        <GridItem
          title="Spotify Connected App"
          photo={thumbNailPhoto}
          gitHubUrl="https://github.com/emmanuelrees90/ero-spotify-app"
          href="https://ero-spotify-app-14b6ac45364e.herokuapp.com/"
        />
        <GridItem
          title="Chat GPT-3 Landing Page"
          photo={thumbNailPhoto}
          gitHubUrl="https://github.com/emmanuelrees90/ero-chatgpt/"
          href=""
        />
          <GridItem
              title="AWS To do App"
              photo={thumbNailPhoto}
              gitHubUrl=""
              href="https://dev.dh10f1bagn1ji.amplifyapp.com"
          />
      </SimpleGrid>
    </Container>
  );
};

export default Experience;
