// middlewares/security.js
const helmet = require('helmet');
const cors = require('cors');

const securityMiddleware = (app) => {
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: "cross-origin" },
      contentSecurityPolicy: false,
    })
  );

  app.use(
    cors({
      origin: process.env.CLIENT_URL || 'http://localhost:5173',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      credentials: true,
    })
  );
};

module.exports = securityMiddleware;
