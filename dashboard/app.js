// Dashboard app - generated from the project's routes in index.js
// Endpoints extracted from server code (routes in Cloudsystemclass/index.js)
const API_BASE = 'http://localhost:3000';

const endpoints = [
  { method: 'GET', path: '/rides', description: 'Fetch all rides' },
  { method: 'POST', path: '/rides', description: 'Create a new ride' },
  { method: 'PATCH', path: '/rides/:id', description: 'Update ride status' },
  { method: 'DELETE', path: '/rides/:id', description: 'Cancel a ride' },
  { method: 'GET', path: '/user', description: 'Fetch all users' },
  { method: 'POST', path: '/user', description: 'Create a new user' },
  { method: 'PATCH', path: '/user/:id', description: 'Update user' },
  { method: 'DELETE', path: '/user/:id', description: 'Delete user' }
];

function $(sel) { return document.querySelector(sel); }

function renderEndpoints() {
  const container = $('#endpoints');
  container.innerHTML = '';

  endpoints.forEach((ep, i) => {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h3');
    title.textContent = `${ep.method} ${ep.path}`;
    card.appendChild(title);

    const desc = document.createElement('p');
    desc.className = 'muted';
    desc.textContent = ep.description || '';
    card.appendChild(desc);

    const controls = document.createElement('div');
    controls.className = 'controls';

    // ID input for routes with :id
    let idInput = null;
    if (ep.path.includes(':id')) {
      idInput = document.createElement('input');
      idInput.placeholder = 'id (for :id)';
      idInput.className = 'small';
      controls.appendChild(idInput);
    }

    // Body textarea for POST/PATCH
    let bodyInput = null;
    if (['POST','PATCH'].includes(ep.method)) {
      bodyInput = document.createElement('textarea');
      bodyInput.placeholder = 'JSON body (e.g. {"name":"Charan"})';
      bodyInput.className = 'body';
      controls.appendChild(bodyInput);
    }

    const sendBtn = document.createElement('button');
    sendBtn.textContent = 'Send';
    sendBtn.addEventListener('click', () => {
      sendRequest(ep, idInput && idInput.value, bodyInput && bodyInput.value);
    });
    controls.appendChild(sendBtn);

    card.appendChild(controls);
    container.appendChild(card);
  });
}

async function sendRequest(ep, idValue, bodyText) {
  let path = ep.path;
  if (ep.path.includes(':id')) {
    if (!idValue) return showResponse({ error: 'Please provide id for this endpoint' });
    path = ep.path.replace(':id', encodeURIComponent(idValue));
  }

  const url = API_BASE + path;
  const opts = { method: ep.method, headers: {} };

  if (['POST','PATCH'].includes(ep.method) && bodyText) {
    try {
      opts.headers['Content-Type'] = 'application/json';
      opts.body = JSON.stringify(JSON.parse(bodyText));
    } catch (err) {
      return showResponse({ error: 'Invalid JSON body' });
    }
  }

  showResponse({ pending: true, url, opts: { ...opts, body: opts.body ? '<body>' : undefined } });

  try {
    const res = await fetch(url, opts);
    const contentType = res.headers.get('content-type') || '';
    let data;
    if (contentType.includes('application/json')) {
      data = await res.json();
    } else {
      data = await res.text();
    }
    showResponse({ status: res.status, headers: Object.fromEntries(res.headers.entries()), data });
  } catch (err) {
    showResponse({ error: String(err) });
  }
}

function showResponse(obj) {
  const pre = $('#responseContent');
  pre.textContent = JSON.stringify(obj, null, 2);
}

renderEndpoints();

// Helpful hint if fetch is blocked by CORS
console.log('Dashboard loaded. If requests fail due to CORS, run the dashboard from a local HTTP server and/or enable CORS on the API server.');
