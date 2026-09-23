import DataTable from './DataTable.jsx'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'userName', label: 'Athlete' },
  { key: 'team', label: 'Team' },
  { key: 'points', label: 'Points' },
]

function Leaderboard() {
  return (
    <DataTable
      columns={columns}
      description="Competitive standings generated from tracked activity points."
      resource="leaderboard"
      title="Leaderboard"
    />
  )
}

export default Leaderboard