import UserModel from '../model/usuarioModel.js';

class UserController {

  async getUsers(req, res, next) {
    try {
      const users = await UserModel.getUsers();
        res.status(200).json(users);
    } catch (erro) {
     next(erro);
    }
  }

  async getUsersFilter(req, res, next) {
    try {
      const param = req.body;
      const users = await UserModel.getUsersFilter(param.filter);
      if (users.length > 0) {
        res.status(200).json(users);
      } else {
        res.status(404).send({ message: "Usuário não localizado." });
      }
    } catch (erro) {
      next(erro);
    }
  }
}

export default new UserController();
