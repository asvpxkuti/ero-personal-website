import { Avatar, Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import VoxelComputerLoader from '../voxel-computer-loader';
import React, { Suspense, lazy } from 'react';
import ProfileDetail from '../profileDetail';
import Contact from '../contactMe';
const LazyVoxelComputer = lazy(() => import('../voxel-computer'));

const ComputerDLG = () => (
  <Suspense fallback={<VoxelComputerLoader />}>
    <LazyVoxelComputer />
  </Suspense>
);
const AboutMe = () => {
  return (
    <Container id="about" maxW="container.md">
      <Flex direction="column" align="flex-start" justify="center">
        <Heading as="h1" size="3xl">
          Emmanuel Rees Oppong.
        </Heading>
        <Heading size="1xl" py={6}>
          I am a full-stack developer based in Canada!
        </Heading>
        <Box my={10}>
          <Box float="left" margin="5px">
            <Avatar
              size="2xl"
              name="Emmanuel R. Oppong"
              src="/images/emmanuel.jpg"
            />{' '}
          </Box>
          <Text maxW="600px" pb={6}>
            Emmanuel is a proficient full-stack software developer who focuses
            particularly on front-end technologies. He brings to the table a
            passion for designing and developing intriguing digital solutions.
            With a distinct flair for product development, Emmanuel skilfully
            navigates all stages of a product&#39;s life cycle, from the nascent
            stages of planning and design to coding innovative solutions for
            practical challenges. Outside of the digital realm, Emmanuel enjoys
            engaging in friendly soccer matches, a hobby he cherishes greatly.
          </Text>
          <ProfileDetail title="1990" text="Born in Toronto, Canada." />
          <ProfileDetail
            title="2016"
            text="Successfully earned his Bachelor of Engineering degree, with a
          specialization in Electrical Engineering, from Toronto Metropolitan
          University, formerly known as Ryerson University."
          />
          <ProfileDetail
            title="2016 to present"
            text="Working as a Software Consultant"
          />
        </Box>
      </Flex>
      <Contact mobile="block" desktop="none" />
      <Flex align="center" justify="center">
        <ComputerDLG />
      </Flex>
    </Container>
  );
};

export default AboutMe;
