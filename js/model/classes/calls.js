const Call = require('./call')
const contacts = require('./contacts')

const calls = {
  list: [],

  addCall(call) {
    const createdCall = new Call(call)
    this.list.push(createdCall)
  },

  setCalls(callsList) {
    this.list = callsList
  },

  cleanByContactId(id) {
    const call = this.list.find(c => c.contact.id === id)
    delete call.contact
  },

  getCalls() {
    return this.list
  },

  getCallByPhoneNumber(phoneNumber) {
    return this.list.find(call => call.phoneNumber.phoneNumber === phoneNumber)
  },

  checkCallsWithContact() {
    this.list.forEach(call => {
      call.contactExist = contacts.some(
        contact => contact.phoneNumber === call.phoneNumber.phoneNumber
      )
    })
  },

  updateCallsWithContactsData() {
    this.list.forEach(call => {
      const contact = contacts.find(
        contact => contact.phoneNumber === call.phoneNumber.phoneNumber
      )
      if (contact) {
        if (call.phoneNumber.name !== contact.name) {
          call.phoneNumber.name = contact.name
        }
        if (call.phoneNumber.familyName !== contact.familyName) {
          call.phoneNumber.familyName = contact.familyName
        }
      }
    })
  },

  checkCallsWithContact() {
    this.list.forEach(call => {
      call.contactExist = this.contacts.some(
        contact => contact.phoneNumber === call.phoneNumber.phoneNumber
      )
    })
  },
}

module.exports = calls
