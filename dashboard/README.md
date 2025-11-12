# Simple API Dashboard

This dashboard is a small, self-contained frontend that lets you view and call the API endpoints found in `Cloudsystemclass/index.js`.

Files added
- `index.html` — main page
- `app.js` — renders endpoints and sends fetch requests
- `styles.css` — minimal styling

Endpoints included
- GET /rides
- POST /rides
- PATCH /rides/:id
- DELETE /rides/:id
- GET /user
- POST /user
- PATCH /user/:id
- DELETE /user/:id

How to run
1. Ensure your API is running on http://localhost:3000 (this project uses port 3000).
2. Serve the dashboard folder from a local HTTP server (recommended) to avoid CORS/file protocol issues. Examples:

PowerShell (using Node http-server if you have Node):

```powershell
npx http-server . -p 8080
# then open http://localhost:8080 in your browser
```

Or Python 3 builtin server:

```powershell
python -m http.server 8080
# then open http://localhost:8080 in your browser
```

Notes
- If fetch requests fail, it's likely due to CORS. Either enable CORS on your Express server (install and use the `cors` package) or run the dashboard from the same origin.
- The dashboard sends requests to `http://localhost:3000`. If your API is running on a different host/port, edit `app.js` and change `API_BASE`.

Next steps
- If you prefer, provide a Postman collection JSON and I can parse it and generate a richer UI (pre-filled example bodies, grouping, auth headers).
