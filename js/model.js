function makeId() {
  return crypto.randomUUID()
}

const model = {
  contacts: [],
  // recentCalls
  calles: [],

  // !!addContact(contact)
  addContact(name, famelyName, number) {
    const contact = {
      id: makeId(),
      name: name,
      famelyName: famelyName,
      phoneNumber: number,
      inFavourites: false,
      dateOfCreation: new Date(),
    }
    this.contacts.push(contact)
  },

  // updateContactById(id, contact)
  editContactById(id, editedContact) {
    const contact = this.getContactById(id)
    Object.assign(contact, editedContact)
  },

  addCall(contact) {
    const call = {
      id: contact.id,
      phoneNumber: contact.phoneNumber,
      // timestamp
      dateOfCall: Date.now(),
      // timestampDelta
      secondsOfCall: 0,
    }
    this.calles.unshift(call)
  },
  setContacts(contacts) {
    this.contacts = contacts
  },
  setCalles(calles) {
    this.calles = calles
  },

  getContacts() {
    return this.contacts
  },

  getCalles() {
    return this.calles
  },

  calcCallesMekedSecondsDiff() {
    // timestampCurrent
    let timeStamp = Date.now()

    this.calles.forEach(call => {
      // timestampDelta = timestampCurrent - timestamp
      const secondsOfCall = (timeStamp - call.dateOfCall) / 1000
      call.secondsOfCall = Math.floor(secondsOfCall)
    })
  },

  searchContacts(query) {
    // return
    const searchedContacts = this.contacts.filter(contact => {
      return contact.name.includes(query) || contact.famelyName.includes(query)
    })
    return searchedContacts
  },

  getFavouritesContacts() {
    return this.contacts.filter(c => c.inFavourites)
  },

  getContactById(id) {
    const contact = this.contacts.find(contact => {
      return contact.id === id
    })
    return contact
  },

  makeCall(callNumber) {
    const contact = this.contacts.find(contact => {
      return contact.phoneNumber === callNumber
    })
    const call = Date.now()
    contact.makedCalles.push(call)
  },

  // toggleFavoriteById(id)
  // contact.inFavourites = !contact.inFavourites

  addRemoveFavourites(id) {
    const contact = this.contacts.find(c => c.id === id)
    contact.inFavourites
      ? (contact.inFavourites = false)
      : (contact.inFavourites = true)
  },

  deleteContactById(id) {
    this.contacts = this.contacts.filter(contact => {
      return contact.id !== id
    })
  },
}
// console.log(model.contacts)
// model.addContact('Ivan', 'Petrov', '102')
// console.log(model.contacts[0].id)

model.addContact('Петр', 'Иванов', '123456789')
model.addContact('Иван', 'Петров', '9876543321')
model.addContact('Марина', 'Владимировна', '333333333')
model.addContact('Владимир', 'Сергеев', '521513515')
model.addContact('Светлана', 'Владимировна', '5555555555')

let finded = model.searchContacts('')
finded

let q = true

// q
// q = !q
// q
// q = !q
// q
// q = !q
// q
// q = !q
// q
// q = !q
// q
// q = !q

q = 1

q ??= 42

q
