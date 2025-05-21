import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/navbar';
import ScrollSpy from './components/scroll';
import LoginPage from './pages/login';


// Normal sayfalar
import About from './pages/about';
import Contact from './pages/contact';
import Education from './pages/education';
import Experience from './pages/experience';
import Project from './pages/projects';
import Services from './pages/services';





function App() {
  return (
    <Router>
      <Box sx={{ bgcolor: '#FFF', minHeight: '100vh' }}>
        <Navbar />
        <ScrollSpy sectionIds={['about', 'education', 'experience', 'projects', 'skills', 'contact']} />

        <Routes>
          <Route path="/" element={
            <>
              <Box id="about"><About /></Box>
              <Box id="education"><Education /></Box>
              <Box id="experience"><Experience /></Box>
              <Box id="projects"><Project /></Box>
              <Box id="services"><Services /></Box>
              <Box id="contact"><Contact /></Box>
            </>
          } />

          <Route path="/login" element={<LoginPage />} />

          
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
