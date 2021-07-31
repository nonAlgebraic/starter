import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
	plugins: [reactRefresh()],
	esbuild: {
		jsxFactory: 'jsx',
		jsxInject: `import { jsx } from '@emotion/react'`,
	},
});
