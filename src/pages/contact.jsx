import React from 'react';
import { Box, Typography, IconButton, Button, Tooltip } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

const Contact = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; 
    link.download = 'cv.pdf';
    link.click();
  };

  const neonIconStyle = {
    color: '#dcdcff',
    filter: 'drop-shadow(0 0 6px rgb(53, 177, 226)) drop-shadow(0 0 10px rgb(16, 203, 216))',
    transition: 'filter 0.3s ease',
    '&:hover': {
      filter: 'drop-shadow(0 0 12px rgb(24, 123, 168)) drop-shadow(0 0 20px rgb(26, 133, 196))',
      cursor: 'pointer',
    },
  };

  return (
    <Box
      id="contact"
      sx={{

        py: 6,
        px: 2,
        bgcolor: 'transparent',
        color: 'black',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Typography variant="h3"
       sx={{
        fontWeight: 'bold',
        fontSize: { xs: 24, sm: 32, md: 36, lg: 40, xl: 48 },

          }}>
        Contact
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 6,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Tooltip title="Telefon">
          <IconButton
            aria-label="Telefon"
             onClick={() => window.open('tel:+905309760393')}
            sx={{ p: 1 }}
          >
            <PhoneIcon  sx={{ fontSize: 50, ...neonIconStyle }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <IconButton
            aria-label="linkedin"
            onClick={() => window.open('https://www.linkedin.com/in/simsekyakup/', '_blank')}
            sx={{ p: 1 }}
          >
            <LinkedInIcon sx={{ fontSize: 50, ...neonIconStyle }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Mail Gönder">
          <IconButton
            aria-label="email"
            onClick={() => window.open('mailto:yakupsimseke@gmail.com')}
            sx={{ p: 1 }}
          >
            <EmailIcon sx={{ fontSize: 50, ...neonIconStyle }} />
          </IconButton>
        </Tooltip>
      </Box>

      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
        onClick={handleResumeDownload}
        sx={{
          px: 5,
          py: 1.5,
          fontSize: '1.1rem',
          fontWeight: 'bold',
          textTransform: 'none',
          borderRadius: 3,
          backgroundColor: 'white',
          color:'#7886C7',
          border:'2px solid #7886C7',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#7886C7',
            color:'white',
            boxShadow: 'none',
          },
        }}
      >
        Cv İndirmek İçin
      </Button>
    </Box>
  );
};

export default Contact;
