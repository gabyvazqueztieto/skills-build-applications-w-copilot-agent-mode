import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    email: { required: true, type: String, unique: true },
    name: { required: true, type: String },
    role: { default: 'member', type: String },
    team: { required: true, type: String },
  },
  { timestamps: true },
);

const teamSchema = new Schema(
  {
    coach: { required: true, type: String },
    focus: { required: true, type: String },
    name: { required: true, type: String, unique: true },
  },
  { timestamps: true },
);

const activitySchema = new Schema(
  {
    calories: { required: true, type: Number },
    durationMinutes: { required: true, type: Number },
    type: { required: true, type: String },
    userEmail: { required: true, type: String },
  },
  { timestamps: true },
);

const leaderboardSchema = new Schema(
  {
    points: { required: true, type: Number },
    rank: { required: true, type: Number },
    team: { required: true, type: String },
    userEmail: { required: true, type: String },
    userName: { required: true, type: String },
  },
  { timestamps: true },
);

const workoutSchema = new Schema(
  {
    difficulty: { required: true, type: String },
    durationMinutes: { required: true, type: Number },
    exercises: { required: true, type: [String] },
    focus: { required: true, type: String },
    title: { required: true, type: String },
  },
  { timestamps: true },
);

export const User = mongoose.model('User', userSchema);
export const Team = mongoose.model('Team', teamSchema);
export const Activity = mongoose.model('Activity', activitySchema);
export const LeaderboardEntry = mongoose.model('LeaderboardEntry', leaderboardSchema);
export const Workout = mongoose.model('Workout', workoutSchema);