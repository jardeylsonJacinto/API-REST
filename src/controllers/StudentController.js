import Photo from '../models/Photo';
import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll({
      attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['filename'],
      },
    });
    return res.json(students);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['Id não informado'] });
      }

      const student = await Student.findByPk(id, {
        attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['filename'],
        },
      });
      if (!student) {
        return res.status(400).json({ errors: ['Aluno não encontrado'] });
      }

      return res.json(student);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);
      return res.json(student);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['Id não informado'] });
      }

      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({ errors: ['Aluno não encontrado'] });
      }

      const updateStundet = await student.update(req.body);
      return res.json(updateStundet);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['Id não informado'] });
      }

      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({ errors: ['Aluno não encontrado'] });
      }

      await student.destroy();
      return res.json({
        apagado: true,
      });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new StudentController();
