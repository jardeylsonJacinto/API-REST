import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'marcos',
      sobrenome: 'JJ',
      email: 'kaka@gmail.com',
      idade: 27,
      peso: 80.5,
      altura: 1.75,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
