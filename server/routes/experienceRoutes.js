import express from 'express';
import * as experienceService from '../services/experienceService.js';
import { checkAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/getText', async (req, res) => {
  try {
    const experiences = await experienceService.getExperiences();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/addText', checkAdmin, async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description || !Array.isArray(description)) {
      return res.status(400).json({ error: 'Title and description (array) are required.' });
    }
    const newExperience = await experienceService.addExperience(title, description);
    res.status(201).json(newExperience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/updateText/:id', checkAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;
    if (!title || !description || !Array.isArray(description)) {
      return res.status(400).json({ error: 'Title and description (array) are required.' });
    }
    const updatedExperience = await experienceService.updateExperience(id, title, description);
    if (!updatedExperience) {
      return res.status(404).json({ error: 'Experience not found.' });
    }
    res.json(updatedExperience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/deleteText/:id', checkAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedExperience = await experienceService.deleteExperience(id);
    if (!deletedExperience) {
      return res.status(404).json({ error: 'Experience not found.' });
    }
    res.json({ message: 'Experience deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
