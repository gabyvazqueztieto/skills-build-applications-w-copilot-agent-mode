# OctoFit Tracker Frontend

React 19 presentation tier for the OctoFit Tracker multi-tier application.

## Environment

Define `VITE_CODESPACE_NAME` when running in Codespaces, for example in `.env.local`:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is set, the frontend calls:

```text
https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/
```

When it is unset, the frontend safely falls back to `http://localhost:8000/api` to avoid `https://undefined-8000...` URLs.
