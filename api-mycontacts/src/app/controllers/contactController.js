const ContactRepository = require('../repositories/contactRepositories');

class ContactController {
  // listar
  async index(req, res) {
    const contacts = await ContactRepository.findAll();

    res.json(contacts);
  }

  // obter UM registro
  async show(req, res) {
    const { id } = req.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ message: 'user not found', id });
    }

    return res.json(contact);
  }

  // criar novo registro
  store() {
  }

  // editar registro
  update() {
  }

  // deletar UM registro
  async delete(req, res) {
    const { id } = req.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ message: 'user not found', id });
    }

    await ContactRepository.delete(id);

    // No content
    return res.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
