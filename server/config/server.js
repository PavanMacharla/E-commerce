module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['yHOzJJ1i7F2hSXQNM93A7A==','vein/64aN0uDqkkD153TlA==','bkvCqq4ZSZ8p+UaYO11s0A==','0YAR6oj6k7UH6Q06pW52Hw=='],
  },
});
