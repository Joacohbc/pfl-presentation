import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        presentation: './presentation.html',
        pitch: './pitch.html'
      }
    }
  },
  publicDir: 'public'
})
