import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import aboutData from '../data/about';



const neonIconStyle = {
  color: 'white',
  transition: 'transform 0.3s ease, filter 0.3s ease',
  filter: 'drop-shadow(0 0 6px rgb(0, 0, 0)) drop-shadow(0 0 10px rgb(61, 14, 148))',
  '&:hover': {
    transform: 'scale(1.3)',
    filter: 'drop-shadow(0 0 12px rgb(255, 255, 255)) drop-shadow(0 0 20px #ffbbff)',
  },
};



const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        overflowY: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: { xs: '100%', sm: '90%', md: '70%' },
          boxShadow: 6,
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        {/* Sol Kısım */}
        <Box
          sx={{
            width: { xs: '90%', md: '30%' },
            background: 'linear-gradient(to bottom,rgb(27, 186, 214),rgb(12, 150, 192),rgb(60, 48, 218))',
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center',
            justifyContent: 'center',
            p: 3,
            
          }}
        >
           <Avatar
              src="asd.jpg"
              alt="Yakup Şimşek"
              sx={{
                width: { xs: 120, sm: 160, md: 200 },
                height: { xs: 120, sm: 160, md: 200 },
                mb: 2,
                border: '3px solid white',
                maxWidth: '100%',
              }}
            />
          <Typography variant="h4" sx={{ color: 'white', mb: 1, textAlign: 'center' }}>
            Yakup Şimşek
          </Typography>
          <Typography variant="h6" sx={{ color: 'white', mb: 2, textAlign: 'center' }}>
            Eğitim Teknoloğu
          </Typography>
          <Box>
              <IconButton
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover svg': {
                        transform: 'scale(1.3)',
                        filter: 'drop-shadow(0 0 32px rgb(0, 0, 0)) drop-shadow(0 0 20px rgb(255, 255, 255))',
                      },
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: 30, ...neonIconStyle }} />
              </IconButton>

              <IconButton
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover svg': {
                        transform: 'scale(1.3)',
                        filter: 'drop-shadow(0 0 32px rgb(0, 0, 0)) drop-shadow(0 0 20px rgb(255, 255, 255))',
                      },
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: 30, ...neonIconStyle }} />
              </IconButton>

              <IconButton
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover svg': {
                        transform: 'scale(1.3)',
                        filter: 'drop-shadow(0 0 32px rgb(0, 0, 0)) drop-shadow(0 0 20px rgb(255, 255, 255))',
                      },
                    }}
                  >
                    <InstagramIcon sx={{ fontSize: 30, ...neonIconStyle }} />
              </IconButton>


          </Box>
        </Box>

        {/* Sağ Kısım */}
        <Box
                  sx={{
                    width: { xs: '90%', md: '70%' },
                    bgcolor: 'white',
                    p: { xs: 2, sm: 3, md: 4 },
                    marginRight: {xs:50, sm:5, md:5},
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems:'center',
                    borderRadius: { md: 4 },
                    zIndex: 1,
                    maxWidth: '100%',
                  }}
                >
           <Typography
    variant="h4"
    sx={{
      color: '#001f4d',
      fontWeight: 'bold',
      mb: 3,
      textAlign: 'center',
      wordBreak: 'break-word',
    }}
  >
    Hakkımda
  </Typography>
          {aboutData.map((item, index) => (
            <Typography
      key={index}
      variant="body1"
      sx={{
        color: '#333',
        mb: 2,
        textAlign:'center',
        wordBreak: 'break-word',
        maxWidth: '100%',
        px: 1
      }}
    >
      • {item}
    </Typography>
          ))}

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, flexWrap: 'wrap' }}>
            <MailOutlineIcon sx={{  mr: 1 }} />
            <Box
              onClick={() => window.open('mailto:yakupsimseke@gmail.com')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                bgcolor: 'white',
                borderRadius: 20,
                cursor: 'pointer',
                border: '2px solid rgb(11, 151, 194)',
                color: 'black',
                transition: '0.3s',
                '&:hover': {
                  bgcolor: 'rgb(11, 151, 194)',
                  color: 'white',
                  border: '2px solid rgb(255, 255, 255)',
                },
                '&:hover svg': {
              color: 'white',
                },
                mt: { xs: 1, md: 0 },
              }}
            >
              <Typography
               variant="body1"
               sx={{
                 fontWeight: '20px'
                  }}>
                Benimle İletişime Geçin
              </Typography>
              <ArrowForwardIosIcon
               sx={{
                color: 'rgb(11, 151, 194)',
                 fontSize: 16,
                 transition: '0.3s',
                
                 }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
