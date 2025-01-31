import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {}, // 빈 객체로 설정하여 오류 방지
  },
});