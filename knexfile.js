const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
}

module.exports = {
  dev: {
    ...sqlite,
    connection: {
      filename: "./data/dev.db3",
    },
  },
  test: {
    ...sqlite,
    connection: {
      filename: "./data/test.db3",
    },
  },
  
  production: {
    client: 'pg',
    connection:  process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
}
