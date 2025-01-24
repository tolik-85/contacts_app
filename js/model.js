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
  },

  makeCall(callNumber) {
    const contact = this.contacts.find(contact => {
      return contact.phoneNumber === number
    })
    this.contacts.contact.makedCalles.push(call)

    const call = {
      callStart: 1,
    }
    // setMonth(),
    //   setDate(),
    //   setHours(),
    //   setMinutes(),
    //   setSeconds(),
    //   setMilliseconds()

    // let seconds = 0
    // setInterval(() => {
    //   seconds++
    // }, 1000)
  },

  addToFavourites(number) {
    const contact = this.contacts.find(contact => {
      return contact.phoneNumber === number
    })
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
console.log(model.contacts)
model.addContact('Vasya', 'Petrov', 22222)
console.log(model.contacts)
model.addToFavourites(22222)
console.log(model.contacts)
model.editContact(22222, 'petya', 'Pupkin', 33333)
console.log(model.contacts)
