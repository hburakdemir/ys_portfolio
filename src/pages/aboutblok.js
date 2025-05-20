// import React from 'react';
// import { Box, Typography, Avatar, IconButton, Grid } from '@mui/material';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import aboutData from '../data/about';



// const neonIconStyle = {
//   color: 'white',
//   transition: 'transform 0.3s ease, filter 0.3s ease',
//   filter: 'drop-shadow(0 0 6px rgb(0, 0, 0)) drop-shadow(0 0 10px rgb(61, 14, 148))',
//   '&:hover': {
//     transform: 'scale(1.3)',
//     filter: 'drop-shadow(0 0 12pxrgb(255, 255, 255)) drop-shadow(0 0 20px #ffbbff)',
//   },
// };

// const keywords = [
//   'Yenilikçi Çözümler',
//   'Dijital Dönüşüm',
//   'İnteraktif İçerikler',
//   'Ekip Çalışmaları',
//   'Etkili Yaratıcılık',
//   'Devamlı Motivasyon',
// ];

// const About = () => {
//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         p: 2,
//         overflowY: 'auto',
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: { xs: 'column', md: 'row' },
//           width: { xs: '100%', sm: '90%', md: '70%' },
//           boxShadow: 6,
//           borderRadius: 4,
//           overflow: 'hidden',
//         }}
//       >
//         {/* Sol Kısım */}
//         <Box
//           sx={{
//             width: { xs: '100%', md: '30%' },
//             background: 'linear-gradient(to bottom,rgb(27, 186, 214),rgb(12, 150, 192),rgb(60, 48, 218))',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             p: 3,
//           }}
//         >
//           <Avatar
//             src="asd.jpg"
//             alt="Yakup Şimşek"
//             sx={{ width: 240, height: 240, mb: 2, border: '3px solid white' }}
//           />
//           <Typography variant="h4" sx={{ color: 'white', mb: 1, textAlign: 'center' }}>
//             Yakup Şimşek
//           </Typography>
//           <Typography variant="h6" sx={{ color: 'white', mb: 2, textAlign: 'center' }}>
//             Eğitim Teknoloğu
//           </Typography>
//           <Box>
//               <IconButton
//                     sx={{
//                       transition: 'all 0.3s ease',
//                       '&:hover svg': {
//                         transform: 'scale(1.3)',
//                         filter: 'drop-shadow(0 0 32px rgb(0, 0, 0)) drop-shadow(0 0 20px rgb(255, 255, 255))',
//                       },
//                     }}
//                   >
//                     <LinkedInIcon sx={{ fontSize: 30, ...neonIconStyle }} />
//               </IconButton>

//               <IconButton
//                     sx={{
//                       transition: 'all 0.3s ease',
//                       '&:hover svg': {
//                         transform: 'scale(1.3)',
//                         filter: 'drop-shadow(0 0 32px rgb(0, 0, 0)) drop-shadow(0 0 20px rgb(255, 255, 255))',
//                       },
//                     }}
//                   >
//                     <GitHubIcon sx={{ fontSize: 30, ...neonIconStyle }} />
//               </IconButton>

//               <IconButton
//                     sx={{
//                       transition: 'all 0.3s ease',
//                       '&:hover svg': {
//                         transform: 'scale(1.3)',
//                         filter: 'drop-shadow(0 0 32px rgb(0, 0, 0)) drop-shadow(0 0 20px rgb(255, 255, 255))',
//                       },
//                     }}
//                   >
//                     <InstagramIcon sx={{ fontSize: 30, ...neonIconStyle }} />
//               </IconButton>


//           </Box>
//         </Box>

//         {/* Sağ Kısım */}
//     <Box
//   sx={{
//     width: { xs: '100%', md: '70%' },
//     bgcolor: 'white',
//     p: 4,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderTopLeftRadius: { xs: 0, md: 40 },
//     borderBottomLeftRadius: { xs: 0, md: 40 },
//     ml: { xs: 0, md: '-30px' },
//     zIndex: 1,
//   }}
// >
//   <Typography
//     variant="h4"
//     sx={{
//       color: '#001f4d',
//       fontWeight: 'bold',
//       mb: 4,
//       textAlign: 'center',
//     }}
//   >
//     Hakkımda
//   </Typography>

//   <Grid container spacing={3} justifyContent="center">
//   {[
//     'Yenilikçi Çözümler',
//     'Dijital Dönüşüm',
//     'İnteraktif İçerikler',
//     'Ekip Çalışmaları',
//     'Etkili Yaratıcılık',
//     'Devamlı Motivasyon',
//   ].map((text, index) => (
//     <Grid
//       item
//       xs={12}   // Mobilde tam genişlik
//       sm={8}    // Tablet biraz daha dar
//       md={4}    // Masaüstü 3 sütun
//       key={index}
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//       }}
//     >
//       <Box
//         sx={{
//           bgcolor: '#FFF',
//           p: 3,
//           borderRadius: 30,
//           boxShadow: 3,
//           textAlign: 'center',
//           width: { xs: '90%', xs :150 ,sm: 250, md: 180 }, 
//           minHeight: 80,  
//           display: 'flex',
//           alignItems: 'center',  
//           justifyContent: 'center',
//           transition: 'transform 0.3s ease, box-shadow 0.3s ease, bgcolor 0.3s ease, color 0.3s ease',
//           cursor: 'pointer',
//           '&:hover': {
//             transform: 'translateY(-5px)',
//             boxShadow: 6,
//             bgcolor: '#2D336B',
//             color: 'white',
//           },
//         }}
//       >
//         <Typography
//           variant="subtitle1"
//           sx={{
//             fontWeight: '12px',
//             fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }, 
//             transition: 'color 0.3s ease',
//             margin: 0,
//           }}
//         >
//           {text}
//         </Typography>
//       </Box>
//     </Grid>
//   ))}
// </Grid>


//             <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, flexWrap: 'wrap' }}>
//             <MailOutlineIcon sx={{  mr: 1 }} />
//             <Box
//               onClick={() => window.open('mailto:yakupsimseke@gmail.com')}
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 1,
//                 px: 2,
//                 py: 1,
//                 bgcolor: 'white',
//                 borderRadius: 20,
//                 cursor: 'pointer',
//                 border: '2px solid rgb(11, 151, 194)',
//                 color: 'black',
//                 transition: '0.3s',
//                 '&:hover': {
//                   bgcolor: 'rgb(11, 151, 194)',
//                   color: 'white',
//                   border: '2px solid rgb(255, 255, 255)',
//                 },
//                 '&:hover svg': {
//               color: 'white',
//                 },
//                 mt: { xs: 1, md: 0 },
//               }}
//             >
//               <Typography
//                variant="body1"
//                sx={{
//                  fontWeight: '20px'
//                   }}>
//                 Benimle İletişime Geçin
//               </Typography>
//               <ArrowForwardIosIcon
//                sx={{
//                 color: 'rgb(11, 151, 194)',
//                  fontSize: 16,
//                  transition: '0.3s',
                
//                  }} />
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default About;
