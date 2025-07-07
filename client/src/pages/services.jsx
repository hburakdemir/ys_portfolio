import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';


const servicesData = [
  {
    icon: <BuildIcon sx={{ fontSize: 70, color: '#90caf9' }} />,
    title: 'E-Öğrenme İçeriği   ',
    desc: 'Etkili e-öğrenme deneyimleri oluşturmak için Articulate Rise 360'    + 
    ' ve Storyline 360 ile içerikler hazırlar, bu içerikleri LMS platformlarına entegre ederim.',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 70, color: '#90caf9' }} />,
    title: 'Video Editleme',
    desc: 'Kullanıcı dostu ve şık tasarımlar oluşturuyorum.',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 70, color: '#90caf9' }} />,
    title: 'Yazılım Danışmanlığı',
    desc: 'Proje ihtiyaçlarınıza özel çözümler sunuyorum.',
  },
 
];

const Services = () => {
  return (
    <Box sx={{ maxWidth: '100%', mx: 'auto', mt: 6, px: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        align="center"
        sx={{ mb: 3, color:'white'}}
      >
        Hizmetler
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="white"
        mb={6}
        maxWidth={700}
        mx="auto"
        sx={{ px: 1 }}
      >
        Profesyonel olarak verdiğim hizmetlere aşağıdan ulaşabilirsiniz
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {servicesData.map(({ icon, title, desc }, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paper
              elevation={0}
              sx={{
                border: '2px solid #E2E2B6',
                background:'linear-gradient(100deg,rgb(28, 91, 167),rgb(5, 36, 73) )',
                p: 10,
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                width: '80%',
                minHeight: 300,
                maxWidth: 500,  
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  borderColor: '#64b5f6',
                  boxShadow: '0 0 15px #90caf9',
                },
                '@media (max-width:900px)': {
                  minHeight: 400,
                  maxWidth: '90vw',
                  p: 3,
                },
                '@media (max-width:600px)': {
                  minHeight: 300,
                  maxWidth: '95vw',
                  p: 2,
                },
              }}
            >
              {icon}
              <Box>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{
                  color:'white',
                }}>
                  {title}
                </Typography>
                <Typography variant="body1" color="white">
                  {desc}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
