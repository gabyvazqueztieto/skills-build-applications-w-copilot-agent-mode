import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const teams = [
  { coach: 'Maya Chen', focus: 'Endurance and recovery', name: 'OctoFleet' },
  { coach: 'Jordan Patel', focus: 'Strength and mobility', name: 'Core Current' },
  { coach: 'Sofia Rivera', focus: 'Cardio conditioning', name: 'Velocity Reef' },
];

const users = [
  { email: 'alex.morgan@example.com', name: 'Alex Morgan', role: 'captain', team: 'OctoFleet' },
  { email: 'jamie.lee@example.com', name: 'Jamie Lee', role: 'member', team: 'Core Current' },
  { email: 'taylor.kim@example.com', name: 'Taylor Kim', role: 'member', team: 'Velocity Reef' },
  { email: 'casey.nguyen@example.com', name: 'Casey Nguyen', role: 'member', team: 'OctoFleet' },
];

const activities = [
  { calories: 410, durationMinutes: 38, type: 'Trail run', userEmail: 'alex.morgan@example.com' },
  { calories: 290, durationMinutes: 45, type: 'Strength circuit', userEmail: 'jamie.lee@example.com' },
  { calories: 360, durationMinutes: 32, type: 'Spin intervals', userEmail: 'taylor.kim@example.com' },
  { calories: 180, durationMinutes: 25, type: 'Yoga recovery', userEmail: 'casey.nguyen@example.com' },
];

const leaderboard = [
  { points: 980, rank: 1, team: 'OctoFleet', userEmail: 'alex.morgan@example.com', userName: 'Alex Morgan' },
  { points: 860, rank: 2, team: 'Velocity Reef', userEmail: 'taylor.kim@example.com', userName: 'Taylor Kim' },
  { points: 790, rank: 3, team: 'Core Current', userEmail: 'jamie.lee@example.com', userName: 'Jamie Lee' },
  { points: 720, rank: 4, team: 'OctoFleet', userEmail: 'casey.nguyen@example.com', userName: 'Casey Nguyen' },
];

const workouts = [
  {
    difficulty: 'Intermediate',
    durationMinutes: 35,
    exercises: ['Warm-up jog', 'Tempo run', 'Walking cooldown'],
    focus: 'Endurance',
    title: 'Harbor Tempo Builder',
  },
  {
    difficulty: 'Beginner',
    durationMinutes: 28,
    exercises: ['Goblet squats', 'Push-ups', 'Plank holds'],
    focus: 'Strength',
    title: 'Foundational Strength Circuit',
  },
  {
    difficulty: 'Advanced',
    durationMinutes: 42,
    exercises: ['Bike sprints', 'Jump rope', 'Core finisher'],
    focus: 'Cardio',
    title: 'Reef Sprint Session',
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      LeaderboardEntry.insertMany(leaderboard),
      Workout.insertMany(workouts),
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
