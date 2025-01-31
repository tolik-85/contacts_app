function makeId() {
  return crypto.randomUUID()
}

const model = {
  contacts: [],
  // recentCalls
  calls: [],

  // !!addContact(contact)
  addContact(newContact) {
    const contact = {
      id: makeId(),
      inFavorites: false,
      dateOfCreation: new Date(),
    }
    Object.assign(contact, newContact)
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
    this.calls.unshift(call)
  },
  setContacts(contacts) {
    this.contacts = contacts
  },

  setCalls(calls) {
    this.calls = calls
  },

  getContacts() {
    return this.contacts
  },

  getCalls() {
    return this.calls
  },

  calcCallsMakedSecondsDiff() {
    // timestampCurrent
    let timeStamp = Date.now()

    this.calls.forEach(call => {
      // timestampDelta = timestampCurrent - timestamp
      const secondsOfCall = (timeStamp - call.dateOfCall) / 1000
      call.secondsOfCall = Math.floor(secondsOfCall)
    })
  },

  searchContacts(query) {
    if (query === '') {
      return ''
    } else {
      let searchedQuery = query.toLowerCase()
      const searchedContacts = this.contacts.filter(contact => {
        return (
          contact.name.toLowerCase().includes(searchedQuery) ||
          contact.famelyName.toLowerCase().includes(searchedQuery)
        )
      })
      console.log(searchedContacts)

      return searchedContacts
    }
  },

  getFavoritesContacts() {
    return this.contacts.filter(c => c.inFavorites)
  },

  getContactById(id) {
    const contact = this.contacts.find(contact => {
      return contact.id === id
    })
    return contact
  },

  addRemoveFavorites(id) {
    const contact = this.contacts.find(c => c.id === id)
    contact.inFavorites = !contact.inFavorites
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

// model.addContact('Петр', 'Иванов', '123456789')
// model.addContact('Иван', 'Петров', '9876543321')
// model.addContact('Марина', 'Владимировна', '333333333')
// model.addContact('Владимир', 'Сергеев', '521513515')
// model.addContact('Светлана', 'Владимировна', '5555555555')

// let finded = model.searchContacts('')
// console.log(finded)
