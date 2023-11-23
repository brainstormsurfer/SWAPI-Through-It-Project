import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    assetsInclude: 'src/assets/**',
  },
};