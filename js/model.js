const model = {
  contacts: [],
  calles: [],

  checkContact(name, famelyName, number) {
    const contact = this.contacts.find(contact => {
      return (
        contact.name === name &&
        contact.famelyName === famelyName &&
        contact.phoneNumber === number
      )
    })
    console.log(this.contacts.indexOf(contact))
    if (contact) {
      this.editContact(contact, name, famelyName, number)
      console.log('model edit')
    } else {
      console.log('model add')
      this.addContact(name, famelyName, number)
    }
  },
  addContact(name, famelyName, number) {
    const contact = {
      id: crypto.randomUUID(),
      name: name,
      famelyName: famelyName,
      phoneNumber: number,
      inFavourites: false,
      dateOfCreation: new Date(),
      makedCalles: [],
    }
    this.contacts.push(contact)
  },
  editContact(contact, name, famelyName, number) {
    console.log(contact)

    contact.name = name
    contact.famelyName = famelyName
    contact.phoneNumber = number
  },
  addCall(contact) {
    const call = {
      id: contact.id,
      phoneNumber: contact.phoneNumber,
      dateOfCall: new Date(),
    }
    this.calles.unshift(call)
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

  // getCallesMekedSecondsDiff() {
  //   let timeStamp = new Date()
  //   let timeCalles = this.calles
  //   console.log(timeCalles)

  //   timeCalles = timeCalles.forEach(call => {
  //     timeStamp = +timeStamp / 1000 / 60 + call.dateOfCall / 1000 / 60

  //     call.dateOfCall = +call.dateOfCall / 1000 / 60
  //     call.dateOfCall = timeStamp - call.dateOfCall
  //   })
  //   console.log(this.calles)
  // },

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

  getContactByNameFamelyNamePhoneNumber(name, famelyName, phoneNumber) {
    const contact = this.contacts.find(contact => {
      return contact.name === name && contact.famelyName === famelyName
    })
    return contact
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
