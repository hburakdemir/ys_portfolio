import express from 'express';
import { getAboutData, addAboutItem, updateAboutItem, deleteAboutItem } from '../services/aboutService.js';
import { checkAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/getText', async (req, res) => {
  // Buraya admin kontrolü koyma, herkes görebilir
  try {
    const data = await getAboutData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Veri alınamadı.' });
  }
});

// Aşağıdaki rotalarda admin kontrol middleware'i kullan:
router.post('/addText', checkAdmin, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text boş olamaz.' });
    }
    const newItem = await addAboutItem(text);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Veri eklenemedi.' });
  }
});

router.put('/updateText/:id', checkAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Metin boş olamaz' });
    }
    const updatedItem = await updateAboutItem(id, text);
    if (!updatedItem) {
      return res.status(404).json({ error: 'Güncellenecek metin bulunamadı' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Veri güncellenemedi' });
  }
});

router.delete('/deleteText/:id', checkAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await deleteAboutItem(id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Silinecek metin bulunamadı' });
    }
    res.json({ message: 'Metin silme tamamlandı', deletedItem });
  } catch (error) {
    res.status(500).json({ error: 'Veri silerken bir hata oluştu' });
  }
});

export default router;
