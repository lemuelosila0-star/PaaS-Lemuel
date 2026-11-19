const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// PaaS info (automatically set by most platforms, with simple fallbacks)
const paasInfo = {
  platform: process.env.PLATFORM_NAME || 'PaaS Cloud',
  environment: process.env.NODE_ENV || 'development',
};

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>PaaS App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 40px;
          }
          h1 {
            text-align: center;
          }
          .paas-box {
            max-width: 420px;
            margin: 24px auto;
            padding: 16px;
            border: 1px solid #ddd;
            border-radius: 8px;
          }
        </style>
      </head>
      <body>
        <h1>Welcome</h1>
        <div class="paas-box">
          <h2>Running on PaaS</h2>
          <p><strong>Platform:</strong> ${paasInfo.platform}</p>
          <p><strong>Environment:</strong> ${paasInfo.environment}</p>
          <p><strong>Port:</strong> ${PORT}</p>
          <p>Your code is deployed and managed automatically—no server setup needed.</p>
        </div>
      </body>
    </html>
  `);
});

// Health check route commonly used by PaaS platforms
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});