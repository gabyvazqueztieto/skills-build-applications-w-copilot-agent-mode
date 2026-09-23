import DataTable from './DataTable.jsx'

const columns = [
  { key: 'type', label: 'Activity' },
  { key: 'userEmail', label: 'Athlete' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'calories', label: 'Calories' },
]

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const activitiesEndpoint = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

function Activities() {
  return (
    <DataTable
      columns={columns}
      description="Recent movement logs including duration and energy output."
      endpoint={activitiesEndpoint}
      resource="activities"
      title="Activities"
    />
  )
}

export default Activities