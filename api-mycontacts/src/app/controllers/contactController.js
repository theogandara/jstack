const ContactRepository = require('../repositories/contactRepositories');

class ContactController {
  async index(req, res) {
    const contacts = await ContactRepository.findAll();

    // listar
    res.json(contacts);
  }

  async show(req, res) {
    // obter UM registro
    const { id } = req.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ message: 'user not found', id });
    }

    return res.json(contact);
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar registro
  }

  async delete(req, res) {
    // deletar UM registro
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
