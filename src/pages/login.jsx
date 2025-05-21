import React, { useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { Button, TextField, Typography, Container, Box, Alert } from '@mui/material';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post('http://localhost:3003/auth/login', {
        username,
        password,
      });

      const { token, message } = response.data;

      //  Token decode 
      const payload = jwtDecode(token);

      login(token, {
        username: payload.username,
        isAdmin: payload.isAdmin,
      });

      setSuccess(true);
      setSuccessMessage(message);
    } catch (err) {
         console.log('Login error:', err.response?.data || err.message);
      const msg = err.response?.data?.error || 'Sunucu hatası';
      setError(msg);
      setSuccessMessage('');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" mb={2}>Giriş Yap</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Kullanıcı Adı"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
          <TextField
            fullWidth
            label="Şifre"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Giriş Yap
          </Button>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && (
                <>
                <Alert severity="success" sx={{mb:2}}>
                   {successMessage}
                </Alert>
                <Button
                variant="contained"
                fullWidth
                onClick={() => navigate('/')}
                sx={{mb:2}}
                >
                  AnaSayfa
                </Button>
                    </>
            )}
        </Box>
      </Box>
    </Container>
  );
}
