import DataTable from './DataTable.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'coach', label: 'Coach' },
  { key: 'focus', label: 'Focus' },
]

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const teamsEndpoint = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

function Teams() {
  return (
    <DataTable
      columns={columns}
      description="Team structure, coaching ownership, and training focus areas."
      endpoint={teamsEndpoint}
      resource="teams"
      title="Teams"
    />
  )
}

export default Teams