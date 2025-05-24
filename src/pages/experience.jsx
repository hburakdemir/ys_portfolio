import React from "react";
import {
  Box,
  Typography,
  Paper,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import experienceData from "../data/experience";

const Experience = () => {



  return (
    <Box
      id="experience"
      sx={{
        py: 6,
        px: 2,

      }}
    >
      
      <Typography
        variant="h4"
        align="center"
        gutterBottom  
        sx={{
          mb: 4,
          fontWeight: 'bold',
          bgcolor:'white',
          
          WebkitBackgroundClip: 'text',      // Safari/Chrome için
          WebkitTextFillColor: 'transparent', // Safari/Chrome için
          backgroundClip: 'text',             // Diğer tarayıcılar için
          textFillColor: 'transparent',      // Diğer tarayıcılar için
        }}
      >
        Deneyim
      </Typography>


     {/* timeline */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Timeline
  position="right"
  sx={{
    maxWidth: "800px",
    width: "100%",
    "& .MuiTimelineItem-root:before": {
      flex: 0,
      padding: 0,
    },
  }}
>
  {experienceData.map((item, index) => (
    <TimelineItem key={index}>
      <TimelineSeparator
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* TimelineConnector'u full height yap ve zIndex ile iconun arkasına at */}
        {index !== experienceData.length - 1 && (
          <TimelineConnector
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
              bgcolor: "primary.main",
              width: 2,
            }}
          />
        )}

        {/* Iconu beyaz arka planlı küçük daire içine al, üstte göster */}
        <TimelineDot
          variant="outlined"
          sx={{
            bgcolor: "white",
            border: "none",
            zIndex: 2,
          }}
        >
          <WorkspacesIcon color="primary" />
        </TimelineDot>
      </TimelineSeparator>

      <TimelineContent
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 2,
            color: "black",
            background:'linear-gradient(100deg, #03346E,rgb(69, 131, 207))',
            borderRadius: 2,
            maxWidth: "600px",
            width: "100%",
            "&:hover": {
              transform: "scale(1.1)",
              filter:
                "drop-shadow(0 0 1px #E2E2B6) drop-shadow(0 0 5px #E2E2B6)",
            },
          }}
        > 
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color:'white',
              pb: 4,
            }}
          >
            {item.title}
          </Typography>
          {item.description.map((desc, i) => (
            <Typography
              key={i}
              variant="body2"
              sx={{
                textAlign: "center",
                color:'white',
                p: 1,
              }}
            >
              • {desc}
            </Typography>
          ))}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  ))}
</Timeline> 

      </Box>
    </Box>
  );
};

export default Experience;
