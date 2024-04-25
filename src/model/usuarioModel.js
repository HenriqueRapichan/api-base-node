import Conexao from '../connection/conexao.js'

class UserModel {
  async getUsers() {
    try {
      const result = await Conexao.query(
        `SELECT * FROM usuarios`
      );
      return result.rows;
    } catch (error) {
      throw new Error('Erro ao buscar usuários: ' + error);
    }
  }

  async getUsersFilter(filter) {
    try {
      let sql = `SELECT * FROM usuarios`;
      if (filter) {
        sql += ` WHERE login ILIKE '%${filter}%'`; 
      }
      const result = await Conexao.query(sql);

      return result.rows;
    } catch (error) {
      throw new Error('Erro ao buscar usuários: ' + error);
    }
  }
}
export default new UserModel();

