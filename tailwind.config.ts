import type { Config } from 'tailwindcss';
import { shadcnPreset } from '@shadcn/ui';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [shadcnPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
