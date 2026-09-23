import DataTable from './DataTable.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'coach', label: 'Coach' },
  { key: 'focus', label: 'Focus' },
]

function Teams() {
  return (
    <DataTable
      columns={columns}
      description="Team structure, coaching ownership, and training focus areas."
      resource="teams"
      title="Teams"
    />
  )
}

export default Teams