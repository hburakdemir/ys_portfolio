import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import pg from 'pg';
import {Pool} from 'pg';

import authRouter from './routes/authRoutes.js';
import aboutRoutes from './routes/aboutRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import projectRoutes from './routes/projectRoute.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/about', aboutRoutes);
app.use('/experience', experienceRoutes);
app.use('/project', projectRoutes);



const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor`));
