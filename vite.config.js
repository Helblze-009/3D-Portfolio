import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  define: {
    'process.env.VITE_APP_EMAILJS_SERVICE_ID': JSON.stringify(process.env.VITE_APP_EMAILJS_SERVICE_ID),
    'process.env.VITE_APP_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.VITE_APP_EMAILJS_TEMPLATE_ID),
    'process.env.VITE_APP_EMAILJS_PUBLIC_KEY': JSON.stringify(process.env.VITE_APP_EMAILJS_PUBLIC_KEY),
  },
});


console.log('VITE_APP_EMAILJS_SERVICE_ID:', process.env.VITE_APP_EMAILJS_SERVICE_ID);
console.log('VITE_APP_EMAILJS_TEMPLATE_ID:', process.env.VITE_APP_EMAILJS_TEMPLATE_ID);
console.log('VITE_APP_EMAILJS_PUBLIC_KEY:', process.env.VITE_APP_EMAILJS_PUBLIC_KEY);