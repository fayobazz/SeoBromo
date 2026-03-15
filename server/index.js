import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';
import { renderPage } from 'vite-plugin-ssr/server';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const isProduction = process.env.NODE_ENV === 'production';
const root = process.cwd();

async function startServer() {
  const app = express();

  app.use(compression());

  // Serve static assets
  app.use(express.static(path.join(root, 'dist/client')));
  app.use('/assets', express.static(path.join(root, 'assets')));

  // SEO files at root level
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain').sendFile(path.join(root, 'assets/robots.txt'));
  });

  app.get('/sitemap.xml', (req, res) => {
    res.type('application/xml').sendFile(path.join(root, 'assets/sitemap.xml'));
  });

  // SSR handler
  app.get('*', async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl
    };

    try {
      const pageContext = await renderPage(pageContextInit);
      const { httpResponse } = pageContext;

      if (!httpResponse) return next();

      const { statusCode, contentType, body } = httpResponse;
      res.status(statusCode).type(contentType).send(body);
    } catch (error) {
      console.error('SSR Error:', error);
      next(error);
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer().catch(console.error);