module.exports = {
  CORS: {
    origin: [
      // Approved CORs locations
    ],
    credentials: true,
  },
  HOST: 'localhost',
  PORT: process.env.PORT || 1234,
}
