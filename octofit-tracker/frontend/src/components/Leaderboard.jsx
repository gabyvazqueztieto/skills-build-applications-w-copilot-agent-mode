import DataTable from './DataTable.jsx'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'userName', label: 'Athlete' },
  { key: 'team', label: 'Team' },
  { key: 'points', label: 'Points' },
]

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const leaderboardEndpoint = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  return (
    <DataTable
      columns={columns}
      description="Competitive standings generated from tracked activity points."
      endpoint={leaderboardEndpoint}
      resource="leaderboard"
      title="Leaderboard"
    />
  )
}

export default Leaderboard