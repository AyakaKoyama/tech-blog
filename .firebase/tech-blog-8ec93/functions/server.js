const { onRequest } = require('firebase-functions/v2/https');
  const server = import('firebase-frameworks');
  exports.ssrtechblog8ec93 = onRequest({"region":"asia-east1","maxInstances":2}, (req, res) => server.then(it => it.handle(req, res)));
  