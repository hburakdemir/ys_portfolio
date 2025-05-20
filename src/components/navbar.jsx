import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const sections = [
  { label: 'Hakkımda', id: 'about' },
  { label: 'Eğitim', id: 'education' },
  { label: 'Deneyim', id: 'experience' },
  { label: 'Projeler', id: 'projects' },
  { label: 'Hizmetler', id: 'services'},
  { label: 'İletişim', id: 'contact' },
];

const Navbar = () => {
  const [elevated, setElevated] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setElevated(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: elevated ? 'rgba(255, 255, 255, 0.7)' : 'transparent',
          backdropFilter: elevated ? 'blur(10px)' : 'none', 
          transition: 'all 0.3s ease',
          color: 'white',

        }}
      >
        <Toolbar sx={{ justifyContent: 'center', position: 'relative', px: { xs: 2, md: 0 } }}>
          {/* Masaüstü Menü */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 8,
              justifyContent: 'center',
              width: '100%',
              
            }}
          >
            {sections.map((section) => (
              <Typography
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                sx={{
                  cursor: 'pointer',
                  userSelect: 'none',
                  color: elevated ? 'black ' : 'black',
                  transition: 'color 0.3s ease',
                }}
              >
                {section.label}
              </Typography>
            ))}
          </Box>

          {/* Mobil hamburger butonu */}
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                backgroundColor: 'transparent !important',
                color: elevated ? 'black' : 'black',
                transition: 'color 0.3s ease',
                p: 1,
              }}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobil menü drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            mt:5,
            backgroundColor: 'transparent',
            width: '40vw',
            maxWidth: 300,
            px: 3,
            py: 4,
          },
        }}
      >
        <List>
          {sections.map((section) => (
            <ListItem
              button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              sx={{
                color: 'white',
                mt:2, bgcolor:'#0b97c2',
                borderRadius:'50px',
                textAlign:'center',
                  }}
            >
              <ListItemText primary={section.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
