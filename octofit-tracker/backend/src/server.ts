import express from 'express';
import database from './config/database.js';

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ service: 'octofit-tracker-backend', status: 'ok' });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening on port ${port}`);
});

export { app, database };