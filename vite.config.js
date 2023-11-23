import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Assuming cherryPickedKeys is an array of environment variable keys
const cherryPickedKeys = ['REACT_APP_START_PAGE'];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  
  cherryPickedKeys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
  };
});
