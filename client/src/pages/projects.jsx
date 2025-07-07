import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Grid, Paper, IconButton,
  TextField, Button
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteIcon from '@mui/icons-material/Delete';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import Swal from "sweetalert2";

// --- API fonksiyonları ---
const API_URL = "http://localhost:3003";

const getToken = () => localStorage.getItem("token") || sessionStorage.getItem("token");

const fetchProjects = () => axios.get(`${API_URL}/project/getText`);

const addProject = (project) => axios.post(`${API_URL}/project/addText`, project, {
  headers: { Authorization: `Bearer ${getToken()}` }
});

const updateProject = (id, project) => axios.put(`${API_URL}/project/updateText/${id}`, project, {
  headers: { Authorization: `Bearer ${getToken()}` }
});

const deleteProject = (id) => axios.delete(`${API_URL}/project/deleteText/${id}`, {
  headers: { Authorization: `Bearer ${getToken()}` }
});

// --- React komponenti ---
const Project = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState([""]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsAdmin(decoded.isAdmin || false);
      } catch {
        setIsAdmin(false);
      }
    }

    const getData = async () => {
      try {
        const res = await fetchProjects();
        const formatted = res.data.map(item => ({
          ...item,
          description: typeof item.description === 'string' ? JSON.parse(item.description) : item.description,
        }));
        setData(formatted);
      } catch (error) {
        console.error("Veri çekme hatası", error);
        setError("Veri alınırken hata oluştu.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleAddDescription = () => {
    setDescriptions(prev => [...prev, ""]);
  };

  const handleDescriptionChange = (index, value) => {
    const updated = [...descriptions];
    updated[index] = value;
    setDescriptions(updated);
  };

  const handleSubmit = async () => {
  if (!title.trim() || descriptions.some(desc => !desc.trim())) {
    await Swal.fire({
      icon: 'warning',
      title: 'Eksik Bilgi',
      text: 'Başlık ve açıklamaları doldurun.',
    });
    return;
  }

  try {
    if (editingIndex !== null) {
      // Güncelleme
      const projectId = data[editingIndex].id;
      await updateProject(projectId, { title, description: descriptions });

      const updatedData = [...data];
      updatedData[editingIndex] = { id: projectId, title, description: descriptions };
      setData(updatedData);
      setEditingIndex(null);

      await Swal.fire({
        icon: 'success',
        title: 'Başarılı!',
        text: 'Proje güncellendi.',
      });
    } else {
      // Yeni ekleme
      const res = await addProject({ title, description: descriptions });
      const newProject = { ...res.data, description: descriptions };
      setData(prev => [...prev, newProject]);

      await Swal.fire({
        icon: 'success',
        title: 'Başarılı!',
        text: 'Yeni proje eklendi.',
      });
    }

    setTitle("");
    setDescriptions([""]);
    setShowForm(false);
  } catch (err) {
    console.error("İşlem hatası:", err);
    await Swal.fire({
      icon: 'error',
      title: 'Hata!',
      text: 'İşlem sırasında bir hata oluştu.',
    });
  }
};

const startEdit = (index) => {
  setEditingIndex(index);
  setTitle(data[index].title);
  setDescriptions(data[index].description);
  setShowForm(true);
};

const handleDelete = async (id, index) => {
  const result = await Swal.fire({
    title: 'Emin misiniz?',
    text: "Bu projeyi silmek istediğinizden emin misiniz?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Evet, sil',
    cancelButtonText: 'İptal',
  });

  if (result.isConfirmed) {
    try {
      await deleteProject(id);
      setData(prev => prev.filter((_, i) => i !== index));
      setActiveIndex(prev => (prev > 0 ? prev - 1 : 0));

      await Swal.fire({
        icon: 'success',
        title: 'Silindi!',
        text: 'Proje başarıyla silindi.',
      });
    } catch (err) {
      console.error("Silme hatası:", err);
      await Swal.fire({
        icon: 'error',
        title: 'Hata!',
        text: 'Silme sırasında bir hata oluştu.',
      });
    }
  }
};


  if (loading) return <Typography align="center">Yükleniyor...</Typography>;
  if (error) return <Typography align="center" color="error">{error}</Typography>;
  if (!data.length) return <Typography align="center">Hiç proje bulunamadı.</Typography>;

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
      <Typography color="white">Admin durumu: {isAdmin ? "Evet" : "Hayır"}</Typography>
      <Typography
        variant='h3'
        sx={{
          fontFamily: '"Segoe UI", sans-serif',
          fontWeight: 'bold',
          color: 'white',
          mb: 6,
          textAlign: 'center',
          fontSize: { xs: 16, sm: 18, md: 20, lg: 24, xl: 44 },
        }}
      >
        Projeler
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
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
            background: 'linear-gradient(100deg, #4583cf, #03346E )',
            color: '#EAE0C8',
            transition: 'all 0.5s ease',
            minHeight: 300,
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} display="flex">
              <WorkIcon sx={{ mr: 1, fontSize: 28 }} />
              <Typography variant="h6" fontWeight="bold">
                {data[activeIndex].title}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3} sx={{ pt: 8, textAlign: 'center' }}>
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
              {data[activeIndex].description.map((item, i) => (
                <li key={i} style={{ marginBottom: '12px' }}>
                  <Typography variant="body1" sx={{
                    fontSize: { xs: 16, sm: 18, md: 18, lg: 18, xl: 20 }
                  }}>
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
          {isAdmin && (
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
              <Button variant="outlined" onClick={() => startEdit(activeIndex)} sx={{bgcolor:'white',color:'black'}}>Düzenle</Button>
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete(data[activeIndex].id, activeIndex)}
                sx={{bgcolor:'white',color:'black'}}
              >
                Sil
              </Button>
            </Box>
          )}
        </Paper>

        <IconButton onClick={handleNext}>
          <ChevronRightIcon sx={{ fontSize: 48, color: '#E2E2B6' }} />
        </IconButton>
      </Box>

      {isAdmin && !showForm && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setShowForm(true);
            setEditingIndex(null);
            setTitle("");
            setDescriptions([""]);
          }}
          sx={{ mt: 6 }}
        >
          + Yeni Proje Ekle
        </Button>
      )}

      {isAdmin && showForm && (
        <Box
          mt={6}
          p={3}
          sx={{
            backgroundColor: '#1b1b1b',
            borderRadius: 4,
            width: '100%',
            maxWidth: 800,
            color: 'white'
          }}
        >
          <Typography variant="h6" mb={2}>
            {editingIndex !== null ? "Projeyi Düzenle" : "Yeni Proje Ekle"}
          </Typography>

          <TextField
            fullWidth
            label="Başlık"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
          />

          {descriptions.map((desc, i) => (
            <TextField
              key={i}
              fullWidth
              multiline
              label={`Açıklama ${i + 1}`}
              value={desc}
              onChange={(e) => handleDescriptionChange(i, e.target.value)}
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
            />
          ))}

          <Button onClick={handleAddDescription} sx={{ mb: 2 }} variant="outlined">
            + Açıklama Ekle
          </Button>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={handleSubmit}>
              {editingIndex !== null ? "Güncelle" : "Ekle"}
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                setShowForm(false);
                setEditingIndex(null);
                setTitle("");
                setDescriptions([""]);
              }}
            >
              İptal
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Project;
