const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export function normalizeResponse(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  const candidates = [
    payload?.data,
    payload?.results,
    payload?.items,
    payload?.docs,
    payload?.data?.results,
    payload?.data?.items,
    payload?.data?.docs,
  ]

  return candidates.find(Array.isArray) ?? []
}

export async function fetchEndpoint(endpoint, resource) {
  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error(`Failed to load ${resource}: ${response.status}`)
  }

  return normalizeResponse(await response.json())
}

export async function fetchResource(resource) {
  return fetchEndpoint(`${apiBaseUrl}/${resource}/`, resource)
}