const Contact = require('./contact')

const contacts = {
  list: [],

  setContacts(contactsList) {
    this.list = contactsList
  },

  getContacts() {
    return this.list
  },

  getContactById(id) {
    return this.list.find(contact => contact.id === id)
  },

  getContactByPhone(phoneNumber) {
    return this.list.find(contact => contact.phoneNumber === phoneNumber)
  },

  getFavoritesContacts() {
    return this.list.filter(c => c.inFavorites)
  },

  markFavoriteById(id) {
    const contact = this.list.find(c => c.id === id)
    if (contact) {
      contact.markAsFavorite()
    }
  },

  unmarkFavoriteById(id) {
    const contact = this.list.find(c => c.id === id)
    if (contact) {
      contact.unmarkAsFavorite()
    }
  },

  deleteContactById(id) {
    this.contacts = this.list.filter(contact => contact.id !== id)
  },

  addContact(contact) {
    const createdContact = new Contact(contact)
    if (createdContact) this.list.push(createdContact)
  },

  updateContactById(id, contact) {
    const findedContact = this.getContactById(id)
    if (findedContact) findedContact.update(contact)
  },
}

module.exports = contacts
