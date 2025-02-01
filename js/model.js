const model = {
  contacts: [],
  // recentCalls
  calls: [],

  // !!addContact(contact)
  addContact(newContact) {
    if (
      newContact.name === '' ||
      newContact.famelyName === '' ||
      newContact.phoneNumber === ''
    ) {
      return
    } else {
      const contact = {
        id: this.makeId(),
        inFavorites: false,
        dateOfCreation: new Date(),
      }
      Object.assign(contact, newContact)
      this.contacts.push(contact)
    }
  },

  // updateContactById(id, contact)
  editContactById(id, editedContact) {
    if (
      editedContact.name === '' ||
      editedContact.famelyName === '' ||
      editedContactgit.phoneNumber === ''
    ) {
      return
    } else {
      const contact = this.getContactById(id)
      Object.assign(contact, editedContact)
    }
  },
  makeId() {
    return crypto.randomUUID()
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
      let searchQuery = query.toLowerCase()
      const searchContacts = this.contacts.filter(contact => {
        return (
          contact.name.toLowerCase().includes(searchQuery) ||
          contact.famelyName.toLowerCase().includes(searchQuery)
        )
      })
      return searchContacts
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
