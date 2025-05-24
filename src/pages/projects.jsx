import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  IconButton,

} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import projectData from '../data/project';


const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = projectData;


  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <Box
      id="experience"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 4, md: 8 },
        px: 2,
      }}
    >
      <Typography
        variant='h3'
        sx={{
          fontFamily: '"Segoe UI", sans-serif',
          fontWeight: 'bold',
          color: 'white',
          mb: 6,
          textAlign: 'center',
          fontSize: { xs: 16, sm: 18, md:20, lg:24, xl:44 },
        }}
      >
        Projeler
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent:'center',
          alignItems: 'center',
          gap: 2,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <IconButton onClick={handlePrev}>
          <ChevronLeftIcon sx={{ fontSize: 48, color: '#E2E2B6' }} />
        </IconButton>

        <Paper
              elevation={6}
              sx={{
                width: '80%',
                maxWidth: { xs: '90%', sm: '95%', md: 800 },
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                background:'linear-gradient(100deg, #4583cf, #03346E )',
                color: '#EAE0C8',
                transition: 'all 0.5s ease',
                minHeight: 300,
                
              }}
            >

          <Grid container spacing={2} justifyContent="center">
            <Grid
             item
              xs={12} sm={6}
             display="flex"
                >
              <WorkIcon sx={{ mr: 1, fontSize: 28 }} />
              <Typography
              variant="h6"
              fontWeight="bold"
                >
                {data[activeIndex].title}
              </Typography>
            </Grid>
            
          </Grid>

         

          <Box mt={3} 
           sx={{
            pt:8,
            textAlign:'center'
            }}>

            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
              {data[activeIndex].description.map((item, i) => (
                <li key={i} style={{ marginBottom: '12px' }}>
                  <Typography variant="body1" sx={{
                     fontSize: { xs: 16, sm: 18, md: 18, lg:18, xl:20  } 
                     }}>
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Paper>

        <IconButton onClick={handleNext}>
          <ChevronRightIcon sx={{ fontSize: 48, color: '#E2E2B6' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Project;
