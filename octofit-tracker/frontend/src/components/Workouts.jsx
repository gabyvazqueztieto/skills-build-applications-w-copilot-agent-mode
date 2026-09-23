import DataTable from './DataTable.jsx'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'focus', label: 'Focus' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'exercises', label: 'Exercises' },
]

function Workouts() {
  return (
    <DataTable
      columns={columns}
      description="Suggested sessions for endurance, strength, and cardio progress."
      resource="workouts"
      title="Workouts"
    />
  )
}

export default Workouts