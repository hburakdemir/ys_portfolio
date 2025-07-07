import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import {
  Box,
  Typography,
  Paper,
  Button,
  Stack,
  TextField,
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

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Admin kontrol için
  const [isAdmin, setIsAdmin] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState([""]);

  // Form görünürlüğü
  const [showForm, setShowForm] = useState(false);

  // Düzenleme için seçili deneyim id'si ve state
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Token'ı localStorage veya sessionStorage'dan al
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsAdmin(decoded.isAdmin || false); // token içinde isAdmin alanı varsa
      } catch {
        setIsAdmin(false);
      }
    }

    axios.get("http://localhost:3003/experience/getText")
      .then(response => {
        const data = response.data.map(item => ({
          ...item,
          description: typeof item.description === "string" ? JSON.parse(item.description) : item.description,
        }));
        setExperienceData(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Veri çekilirken hata oluştu.");
        setLoading(false);
      });
  }, []);

  const handleAddDescription = () => {
    setDescriptions([...descriptions, ""]);
  };

  const handleDescriptionChange = (index, value) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = value;
    setDescriptions(newDescriptions);
  };

  const handleSubmit = async () => {
  if (!title.trim() || descriptions.some(desc => !desc.trim())) {
    Swal.fire({
      icon: 'warning',
      title: 'Uyarı',
      text: 'Başlık ve Açıklamalar BOŞ'
    });
    return;
  }
  try {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    if (editingId) {
      // Güncelleme işlemi
      const res = await axios.put(`http://localhost:3003/experience/updateText/${editingId}`, {
        title,
        description: descriptions
      }, config);

      setExperienceData(prev => prev.map(item =>
        item.id === editingId
          ? { ...res.data, description: descriptions }
          : item
      ));
      setEditingId(null);

      await Swal.fire({
        icon: 'success',
        title: 'Başarılı',
        text: 'OKEY '
      });
    } else {
      // Yeni ekleme işlemi
      const res = await axios.post("http://localhost:3003/experience/addText", {
        title,
        description: descriptions
      }, config);

      setExperienceData(prev => [...prev, { ...res.data, description: descriptions }]);

      await Swal.fire({
        icon: 'success',
        title: 'Başarılı',
        text: 'Eklendi Eklendi'
      });
    }

    setTitle("");
    setDescriptions([""]);
    setShowForm(false);
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Hata',
      text: 'Bi sıkıntı var '
    });
    console.error(err);
  }
};


 const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: 'Sil',
    text: "Metni sil",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'sil ',
    cancelButtonText: 'silme'
  });

  if (result.isConfirmed) {
    try {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.delete(`http://localhost:3003/experience/deleteText/${id}`, config);

      setExperienceData(prev => prev.filter(item => item.id !== id));

      Swal.fire(
        'silindi',
        'silindi',
        'success'
      );
    } catch (err) {
      Swal.fire(
        'Hata!',
        'silinmedi',
        'error'
      );
      console.error(err);
    }
  }
};


  const handleEdit = (item) => {
    setEditingId(item.id);
    setTitle(item.title);
    setDescriptions(item.description);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingId(null);
    setTitle("");
    setDescriptions([""]);
    setShowForm(false);
  };

  if (loading) return <Typography align="center">Yükleniyor...</Typography>;
  if (error) return <Typography color="error" align="center">{error}</Typography>;

  return (
    <Box id="experience" sx={{ py: 6, px: 2 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          mb: 4,
          fontWeight: 'bold',
          bgcolor:'white',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        }}
      >
        Deneyim
      </Typography>

      {/* Sadece admin ise göster */}
      {isAdmin && (
        <Box sx={{ mb: 4, textAlign: "center" }}>
          {!showForm ? (
            <Button variant="contained" onClick={() => setShowForm(true)}>
              {editingId ? "Deneyimi Düzenle" : "Yeni Deneyim Ekle"}
            </Button>
          ) : (
            <Paper sx={{ p: 3, maxWidth: 600, mx: "auto" }} elevation={3}>
              <Stack spacing={2}>
                <TextField
                  label="Başlık"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  fullWidth
                />
                {descriptions.map((desc, i) => (
                  <TextField
                    key={i}
                    label={`Açıklama ${i + 1}`}
                    value={desc}
                    onChange={e => handleDescriptionChange(i, e.target.value)}
                    fullWidth
                    multiline
                    minRows={2}
                  />
                ))}
                <Button variant="outlined" onClick={handleAddDescription}>
                  Açıklama Satırı Ekle
                </Button>
                <Stack direction="row" spacing={2} justifyContent="center">
                  <Button variant="contained" onClick={handleSubmit}>
                    Kaydet
                  </Button>
                  <Button variant="text" onClick={handleCancel}>
                    İptal
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          )}
        </Box>
      )}

      {/* Timeline kısmı */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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

                  {/* Admin için düzenle butonu */}
                  {isAdmin && (
                    <Box textAlign="center" mt={2}>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleEdit(item)}
                        sx={{
                          backgroundColor: 'white',
                          color: 'black',
                          borderColor: 'black',
                          '&:hover': {
                            backgroundColor: '#f0f0f0',
                            borderColor: 'black',
                          },
                        }}
                      >
                        Düzenle
                      </Button>
                      {isAdmin && (
                      <Button
                        variant="outlined"
                        size="small"
                        color="error"
                        onClick={() => handleDelete(item.id)}
                        sx={{
                          backgroundColor: 'white',
                          color: 'black',
                          borderColor: 'black',
                          '&:hover': {
                            backgroundColor: '#f0f0f0',
                            borderColor: 'black',
                          },
                        }}
                      >
                        Sil
                      </Button>
                    )}
                    </Box>
                  )}
                 

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
