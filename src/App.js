import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import theme from './lib/theme';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Navbar />
        <AboutMe />
        <Projects />
        <Experience />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
