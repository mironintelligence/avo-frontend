export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://avo-backend-288x.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});