import DataTable from './DataTable.jsx'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'team', label: 'Team' },
  { key: 'role', label: 'Role' },
]

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const usersEndpoint = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  return (
    <DataTable
      columns={columns}
      description="Profiles, team assignments, and roles synced from the OctoFit API."
      endpoint={usersEndpoint}
      resource="users"
      title="Users"
    />
  )
}

export default Users