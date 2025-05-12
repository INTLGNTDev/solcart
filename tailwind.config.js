// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      // custom neon-text shadow
      textShadow: {
        neon: '0 0 8px rgba(255,0,255,0.7), 0 0 16px rgba(0,255,255,0.5)'
      }
    }
  },
  plugins: []
};

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
=======
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      // custom neon-text shadow
      textShadow: {
        neon: '0 0 8px rgba(255,0,255,0.7), 0 0 16px rgba(0,255,255,0.5)'
      }
    }
  },
  plugins: []
};

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
>>>>>>> 2abad62992f83d83afbb186ffef9efe71389bd35
