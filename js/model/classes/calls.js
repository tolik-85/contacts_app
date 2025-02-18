const Call = require('../call')

const calls = {
  list: [],

  setCalls(callsList) {
    this.list = callsList
  },

  getCalls() {
    return this.list
  },

  getCallByPhoneNumber(phoneNumber) {
    return this.list.find(call => call.phoneNumber.phoneNumber === phoneNumber)
  },

  // updateCallsWithContactsData() {
  //   this.list.forEach(call => {
  //     const contact = this.contacts.find(
  //       contact => contact.phoneNumber === call.phoneNumber.phoneNumber
  //     )
  //     if (contact) {
  //       if (call.phoneNumber.name !== contact.name) {
  //         call.phoneNumber.name = contact.name
  //       }
  //       if (call.phoneNumber.familyName !== contact.familyName) {
  //         call.phoneNumber.familyName = contact.familyName
  //       }
  //     }
  //   })
  // },
}

module.exports = calls
