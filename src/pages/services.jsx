import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const servicesData = [
  {
    icon: <BuildIcon sx={{ fontSize: 70, color: '#90caf9' }} />,
    title: 'Web Geliştirme',
    desc: 'Modern ve duyarlı web uygulamaları geliştiriyorum.',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 70, color: '#90caf9' }} />,
    title: 'UI/UX Tasarım',
    desc: 'Kullanıcı dostu ve şık tasarımlar oluşturuyorum.',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 70, color: '#90caf9' }} />,
    title: 'Yazılım Danışmanlığı',
    desc: 'Proje ihtiyaçlarınıza özel çözümler sunuyorum.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 70, color: '#90caf9' }} />,
    title: 'Teknik Destek',
    desc: 'Sorunlarınızı hızlı ve etkili şekilde çözüyorum.',
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
        sx={{ mb: 3 }}
      >
        Hizmetler
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
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
                border: '2px solid #90caf9',
                bgcolor: 'transparent',
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
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
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
