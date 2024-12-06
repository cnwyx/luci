function call(service, method, params = {}) {
  return fetch('/ubus', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          jsonrpc: '2.0',
          id: Date.now(),
          method: 'call',
          params: [
              localStorage.getItem('ubus_session') || '00000000000000000000000000000000',
              service,
              method,
              params
          ]
      })
  })
  .then(r => r.json());
}

function log(...args) {
  console.log(...args);
}
function err(...args) {
  console.error(...args);
}