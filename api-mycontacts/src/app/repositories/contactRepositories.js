// eslint-disable-next-line import/no-extraneous-dependencies
const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Théo Gândara',
    email: 'theogandara22@mail.com',
    phone: '11 999999999',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'João Gândara',
    email: 'joãogandara22@mail.com',
    phone: '11 999999999',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    const contact = contacts.find((ctt) => ctt.id === id);

    return new Promise((resolve) => resolve(contact));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((ctt) => ctt.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
