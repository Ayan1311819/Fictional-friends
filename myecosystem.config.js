module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'server.js',
      cwd: '/home/ubuntu/Fictional-friends/backend/src',
      env: {
        NODE_ENV: 'production',
        PORT: 5001,
        MONGO_URI: 'mongodb+srv://nuclearenergy774:ZNWqpHvGHgEglifT@cluster-hailmary.3untdtk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-hailmary',
        UPSTASH_REDIS_REST_URL: 'https://clear-earwig-59677.upstash.io',
        UPSTASH_REDIS_REST_TOKEN: 'AekdAAIjcDE5OWY3YTAyYzQzOTI0ZWIyOWQ0ZTdhMWNhMGJhMmEzZnAxMA'
      }
    },
    {
      name: 'frontend',
      script: 'npm',
      args: 'run preview -- --port 5173 --host', // Force port 5173 and expose
      cwd: '/home/ubuntu/Fictional-friends/frontend',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
