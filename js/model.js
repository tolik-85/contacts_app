const model = {
  contacts: [],
  calles: [],

  addContact(name, famelyName, number) {
    const contact = {
      id: crypto.randomUUID(),
      name: name,
      famelyName: famelyName,
      phoneNumber: number,
      inFavourites: false,
      dateOfCreation: new Date(),
    }
    this.contacts.push(contact)
  },

  editContactById(id, editedContact) {
    console.log(this.contacts)
    const contact = this.getContactById(id)
    Object.assign(contact, editedContact)
  },

  addCall(contact) {
    const call = {
      id: contact.id,
      phoneNumber: contact.phoneNumber,
      dateOfCall: Date.now(),
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
  mekeId() {
    return crypto.randomUUID()
  },

  getContacts() {
    return this.contacts
  },

  getCalles() {
    return this.calles
  },

  calcCallesMekedSecondsDiff() {
    let timeStamp = Date.now()

    this.calles.forEach(call => {
      call.secondsOfCall = (timeStamp - call.dateOfCall) / 1000
      call.secondsOfCall = Math.floor(call.secondsOfCall)
    })
  },

  searchContacts(par) {
    const searchedContacts = this.contacts.filter(contact => {
      return contact.name.includes(par) || contact.famelyName.includes(par)
    })
    return searchedContacts
  },

  getFavouritesContacts() {
    const favouritesContacts = this.contacts.filter(contact => {
      return contact.inFavourites
    })
    return favouritesContacts
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
