const model = {
  contacts: [],

  addContact(name, famelyName, number) {
    const contact = {
      name: name,
      famelyName: famelyName,
      phoneNumber: number,
      inFavourites: false,
      makedCalles: [],
    }
    this.contacts.push(contact)
    console.log(this.contacts)
  },

  getContacts() {
    return this.contacts
  },

  getContactByNameAndFamelyName(name, famelyName) {
    const contact = this.contacts.find(contact => {
      return contact.name === name && contact.famelyName === famelyName
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

  addToFavourites(number) {
    const contact = this.contacts.find(c => c.phoneNumber === number)
    contact.inFavourites = true
  },

  editContact(phoneNumber, name, famelyName, number) {
    const contact = this.contacts.find(contact => {
      return contact.phoneNumber === phoneNumber
    })
    contact.name = name
    contact.famelyName = famelyName
    contact.phoneNumber = number
  },
}
// console.log(model.contacts)
// model.addContact('Vasya', 'Petrov', 22222)
// console.log(model.contacts)
// model.addToFavourites(22222)
// console.log(model.contacts)
// model.editContact(22222, 'petya', 'Pupkin', 33333)
// console.log(model.contacts)
// model.makeCall(33333)
// console.log(model.contacts)
// const time = Date.now()
// console.log(time)
// const time2 = model.contacts[0].makedCalles[0]
// console.log(time2)
// const time3 = Date.now()
// console.log(time3)
// console.log(time2 - time)
