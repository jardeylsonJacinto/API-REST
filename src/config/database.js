require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.DATA_HOST,
  port: process.env.DATA_PORT,
  username: process.env.DATA_USERNAME,
  password: process.env.DATA_PASSWORD,
  database: process.env.DATA_BASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
