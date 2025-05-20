import './App.css';
import { Box } from '@mui/material';

import Navbar from './components/navbar';
import ScrollSpy from './components/scroll';

/////////////////////
import About from './pages/about';
import Contact from './pages/contact';
import Education from './pages/education';
import Experience from './pages/experience';
import Project from './pages/projects';
import Services from './pages/services';

function App() {
  return (
    
    <Box 
    
      sx={{ 
        bgcolor:'#FFF',
        minHeight: '100vh',  // tüm ekran yüksekliği kadar
      }}
    >
      <Navbar />
       <ScrollSpy sectionIds={['about', 'education', 'experience', 'projects', 'skills', 'contact']} />

      <Box id="about"sx={{ py: { xs: 6, md: 10 }, minHeight: '100vh' }}> <About /> </Box>
      <Box id="education"sx={{ py: { xs: 6, md: 10 }, minHeight: '90vh' }}> <Education /> </Box>
      <Box id="experience"sx={{ py: { xs: 6, md: 10 }, minHeight: '90vh' }}> <Experience /> </Box>
      <Box id="projects"sx={{ py: { xs: 6, md: 10 }, minHeight: '100vh' }}> <Project /> </Box>
      <Box id="services"sx={{ py: { xs: 6, md: 10 }, minHeight: '100vh' }}> <Services /> </Box>
      <Box id="contact"sx={{ py: { xs: 6, md: 10 }, minHeight: '100vh' }}> <Contact /> </Box>
       
     
      
    </Box>
  );
}

export default App;
