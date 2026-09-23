import DataTable from './DataTable.jsx'

const columns = [
  { key: 'type', label: 'Activity' },
  { key: 'userEmail', label: 'Athlete' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'calories', label: 'Calories' },
]

function Activities() {
  return (
    <DataTable
      columns={columns}
      description="Recent movement logs including duration and energy output."
      resource="activities"
      title="Activities"
    />
  )
}

export default Activities