import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages deploys under repository subpath /aquora/, while local dev and Vercel use /
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'aquora';

export default defineConfig({
  base: isGitHubPages ? `/${repoName}/` : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
