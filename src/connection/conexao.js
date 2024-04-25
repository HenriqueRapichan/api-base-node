import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;

class Conexao {
  constructor() {
    dotenv.config();
    this.pool = new Pool({
      host: process.env.DB_HOST,
      port: process.env.PORT,
      database: process.env.DB_BASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });
  }

  async query(sql, values) {
    const client = await this.pool.connect();
    try {
      const result = await client.query(sql, values);
      return result;
    } catch (error) {
      console.error('Erro ao executar a consulta: ' + error);
      throw error;
    } finally {
      client.release(); // Importante para liberar o cliente de volta ao pool
    }
  }
}

export default new Conexao();