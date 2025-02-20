const Call = require('./call')

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
}

module.exports = calls
