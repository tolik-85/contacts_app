const getDeclination = require('../functions/getDeclination')

class Call {
  constructor(call) {
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
module.exports = Call
