import { useEffect, useState } from 'react'
import { fetchEndpoint } from './api.js'

function formatValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (value === null || value === undefined || value === '') {
    return '—'
  }

  return String(value)
}

function DataTable({ columns, description, endpoint, resource, title }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isCurrent = true

    async function loadResource() {
      try {
        setIsLoading(true)
        setError('')
        const data = await fetchEndpoint(endpoint, resource)

        if (isCurrent) {
          setItems(data)
        }
      } catch (loadError) {
        if (isCurrent) {
          setError(loadError.message)
        }
      } finally {
        if (isCurrent) {
          setIsLoading(false)
        }
      }
    }

    loadResource()

    return () => {
      isCurrent = false
    }
  }, [endpoint, resource])

  return (
    <section className="resource-view">
      <div className="resource-heading">
        <div>
          <p className="eyebrow">{resource}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <span className="api-pill">{endpoint}</span>
      </div>

      {isLoading && <p className="status-message">Loading {resource}...</p>}
      {error && <p className="status-message error">{error}</p>}
      {!isLoading && !error && (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col">{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id ?? `${resource}-${JSON.stringify(item)}`}>
                  {columns.map((column) => (
                    <td key={column.key}>{formatValue(item[column.key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {items.length === 0 && <p className="status-message">No {resource} available yet.</p>}
        </div>
      )}
    </section>
  )
}

export default DataTable