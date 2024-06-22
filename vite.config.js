import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '@redux': path.resolve(__dirname, 'redux'),
      '@Setup_EVM2': path.resolve(__dirname, 'src/Setup_EVM2.js'),
      '@Setup_EVM': path.resolve(__dirname, 'src/Setup_EVM.js'),
      '@SmartWallet': path.resolve(__dirname, 'src/SmartWallet/Index.jsx'),
      '@SparkContext': path.resolve(__dirname, 'src/SparkContext.jsx'),
    },
  },
});
