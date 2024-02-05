// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  // تكوينات Vite الخاصة بك هنا
  // ...

  // Plugin Vue
  optimizeDeps: {
    include: ['swiper']
  },

  // Hook التخصيص
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url.includes('/swiper/')) {
        req.url = req.url.replace('/swiper/', '/node_modules/swiper/');
      }
      next();
    });
  }
});
