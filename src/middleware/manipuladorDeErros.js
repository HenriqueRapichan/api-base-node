/* eslint-disable no-unused-vars */
function manipuladorDeErros(erro, req, res, next){
    res.status(500).json({ message: 'Erro interno do servidor. ', error: erro.message });
  }
export default manipuladorDeErros
