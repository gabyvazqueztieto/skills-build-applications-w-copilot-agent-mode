import DataTable from './DataTable.jsx'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'team', label: 'Team' },
  { key: 'role', label: 'Role' },
]

function Users() {
  return (
    <DataTable
      columns={columns}
      description="Profiles, team assignments, and roles synced from the OctoFit API."
      resource="users"
      title="Users"
    />
  )
}

export default Users