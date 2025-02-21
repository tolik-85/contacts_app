const getDeclination = require('../functions/getDeclination')
const contacts = require('./contacts')

class Call {
  constructor(call) {
    const contact = contacts.getContactByPhone(call.phoneNumber)
    if (contact) this.contact = contact
    this.phoneNumber = call.phoneNumber
    this.timestampCreated = Date.now()
  }

  getSecondsAgo() {
    return Math.floor((Date.now() - this.timestampCreated) / 1000)
  }
}

const call = new Call({
  phoneNumber: 4444,
})

console.log(call)
console.log(contacts)

module.exports = Call
