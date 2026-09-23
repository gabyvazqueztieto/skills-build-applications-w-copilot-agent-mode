import express from 'express';
import { apiBaseUrl } from './config/apiUrl.js';
import database from './config/database.js';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models/index.js';

const app = express();
const port = Number(process.env.PORT || 8081);

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ baseUrl: apiBaseUrl, service: 'octofit-tracker-backend', status: 'ok' });
});

app.get('/api/users/', async (_request, response) => {
  const data = await User.find().sort({ name: 1 }).lean();

  response.json({ data, resource: 'users' });
});

app.get('/api/teams/', async (_request, response) => {
  const data = await Team.find().sort({ name: 1 }).lean();

  response.json({ data, resource: 'teams' });
});

app.get('/api/activities/', async (_request, response) => {
  const data = await Activity.find().sort({ createdAt: -1 }).lean();

  response.json({ data, resource: 'activities' });
});

app.get('/api/leaderboard/', async (_request, response) => {
  const data = await LeaderboardEntry.find().sort({ rank: 1 }).lean();

  response.json({ data, resource: 'leaderboard' });
});

app.get('/api/workouts/', async (_request, response) => {
  const data = await Workout.find().sort({ title: 1 }).lean();

  response.json({ data, resource: 'workouts' });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening at ${apiBaseUrl} on port ${port}`);
});

export { app, database };