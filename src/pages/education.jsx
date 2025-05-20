import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Education = () => {
  const [gpa, setGpa] = useState(0);

  // GPA animasyonu
  useEffect(() => {
    let start = 0;
    const end = 3.10;
    const duration = 3000; // ms
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setGpa(start.toFixed(2));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      id="education"
      sx={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,

      }}
    >
     

     
      <Box
        component="img"
        src="/hacettepe.ico"
        alt="Hacettepe Icon"
        sx={{
          position: "absolute",
          top: "10%",
          left: "100%",
          width: 80,
          height: 90,
          animation: "rightToLeft 15s linear infinite",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      
      <Box
        component="img"
        src="/hacettepe.ico"
        alt="Hacettepe Icon"
        sx={{
          position: "absolute",
          top: "30%",
          left: "-100px",
          width: 60,
          height: 70,

          animation: "leftToRight 20s linear infinite",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

     
      <Box
        component="img"
        src="/hacettepe.ico"
        alt="Hacettepe Icon"
        sx={{
          position: "absolute",
          left: "20%",
          top: "-100px",
          width: 80,
          height: 90,

          animation: "topToBottom 18s linear infinite",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

     
      <Box
        component="img"
        src="/hacettepe.ico"
        alt="Hacettepe Icon"
        sx={{
          position: "absolute",
          left: "70%",
          bottom: "-100px",
          width: 70,
          height: 80,

          animation: "bottomToTop 17s linear infinite",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Eğitim içeriği */}
      <Box
        sx={{
          bgcolor: "white",
          p: 4,
          borderRadius: 4,
          boxShadow: 6,
          width: { xs: "100%", sm: "90%", md: "70%", lg: "60%" },
          maxWidth: 600,
          maxHeight: 300,
          height: { xs: "100%", sm: "90%", md: "70%", lg: "40%" },
          transition:
            "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease",
          color: "#2D336B",
          "& svg": {
            color: "#2D336B",
            transition: "color 0.3s ease",
          },
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: 10,
            bgcolor: "#2D336B",
            color: "white",
            "& svg": {
              color: "white",
            },
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Başlık */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 3,
            color: "inherit",
          }}
        >
          Eğitim
        </Typography>

        {/* İçerik */}
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Grid item sx={{ display: "flex", alignItems: "center", mb: { xs: 1, md: 0 } }}>
            <SchoolIcon sx={{ mr: 1, color: "inherit" }} />
            <Typography variant="h6">Hacettepe Üniversitesi</Typography>
          </Grid>

          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <CalendarMonthIcon sx={{ mr: 1, color: "inherit" }} />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              2020 - 2024
            </Typography>
          </Grid>
        </Grid>

        {/* Bölüm Adı */}
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, sm: 18 }, color: "inherit" }}>
            Bilgisayar ve Öğretim Teknolojileri Eğitimi
          </Typography>
        </Box>

        {/* GPA kutusu */}
        <Box
          sx={{
            mt: 4,
            p: 1,
            bgcolor: "white",
            borderRadius: 2,
            maxWidth: 120,
            mx: { xs: "auto", sm:'auto', md:'auto', lg: 0 },
            ml: { lg: "auto" },  
            color: "#7886C7",
            fontWeight: "600",
            textAlign: "center",
            border: "2px solid #7886C7",
          }}
        >
          <Typography>GPA: 4.0 / {gpa}</Typography>
        </Box>
      </Box>

      {/* Animasyon keyframes */}
      <style>
        {`
          @keyframes rightToLeft {
            0% { left: 100%; }
            100% { left: -350px; }
          }
          @keyframes leftToRight {
            0% { left: -550px; }
            100% { left: 100%; }
          }
          @keyframes topToBottom {
            0% { top: -250px; }
            100% { top: 100%; }
          }
          @keyframes bottomToTop {
            0% { bottom: -50px; }
            100% { bottom: 100%; }
          }
        `}
      </style>
    </Box>
  );
};

export default Education;
