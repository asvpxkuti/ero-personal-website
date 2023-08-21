import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import theme from './lib/theme';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import './App.css';
import { HashLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Box>
        {loading ? (
          <Box className="App">
            <HashLoader color="#64ffda" size={100} loading={loading} />
          </Box>
        ) : (
          <>
            <Navbar />
            <AboutMe />
            <Projects />
            <Experience />
            <Footer />
          </>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
