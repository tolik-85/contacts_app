const hasEmptyField = require('../functions/hasEmptyField')
const makeId = require('../functions/makeId')

class Contact {
  constructor(contact) {
    if (hasEmptyField(contact)) return
    if (contact.id) {
      this.id = contact.id
    } else {
      this.id = makeId()
    }
    if (contact.timestampCreated) {
      this.timestampCreated = contact.timestampCreated
    } else {
      this.timestampCreated = new Date()
    }
    if (contact.isFavorite) {
      this.isFavorite = contact.isFavorite
    } else {
      this.isFavorite = false
    }
    this.firstName = contact.firstName
    this.lastName = contact.lastName
    this.phoneNumber = contact.phoneNumber
  }

  markAsFavorite() {
    this.isFavorite = true
  }

  unmarkAsFavorite() {
    this.isFavorite = false
  }

  update(contact) {
    if (hasEmptyField(contact)) return
    Object.assign(this, contact)
  }
}

const contact = new Contact({
  id: 333,
  firstName: 'aaaa',
  lastName: 'bbbb',
  phoneNumber: '3333',
})

console.log(contact)

module.exports = Contact
