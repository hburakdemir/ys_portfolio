import express from 'express';
import * as projectService from '../services/projectService.js';
import { checkAdmin } from '../middleware/authMiddleware.js';


const router = express.Router();

router.get('/getText', async (req, res) => {
  try {
    const projects = await projectService.getProjects();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/addText',checkAdmin, async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required.' });
    }
    const newProject = await projectService.addProject(title, description);
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/updateText/:id',checkAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required.' });
    }
    const updatedProject = await projectService.updateProject(id, title, description);
    if (!updatedProject) {
      return res.status(404).json({ error: 'Project not found.' });
    }
    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/deleteText/:id',checkAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedProject = await projectService.deleteProject(id);
    if (!deletedProject) {
      return res.status(404).json({ error: 'Project not found.' });
    }
    res.json({ message: 'Project deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
