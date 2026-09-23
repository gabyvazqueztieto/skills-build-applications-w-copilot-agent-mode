import DataTable from './DataTable.jsx'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'focus', label: 'Focus' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'exercises', label: 'Exercises' },
]

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const workoutsEndpoint = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

function Workouts() {
  return (
    <DataTable
      columns={columns}
      description="Suggested sessions for endurance, strength, and cardio progress."
      endpoint={workoutsEndpoint}
      resource="workouts"
      title="Workouts"
    />
  )
}

export default Workouts