const hasEmptyField = object => !Object.values(object).every(c => c)

function getDeclination(number) {
  const declination = {
    секунду: [1],
    секунды: [2, 3, 4],
    секунд: [0, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  }
  const numStr = number.toString()
  const lastTwoDigits = Number(numStr.slice(-2))
  const lastDigit = Number(numStr.slice(-1))
  if (declination.секунд.includes(lastTwoDigits)) {
    return 'секунд'
  }
  if (declination.секунду.includes(lastDigit)) {
    return 'секунду'
  }
  if (declination.секунды.includes(lastDigit)) {
    return 'секунды'
  }
  return 'секунд'
}
function getSecondAgo() {
  const timestampCurrent = Date.now()
  const timestampDelta = timestampCurrent - this.timestampCreated
  const seconds = timestampDelta / 1000
  return Math.floor(seconds)
}

function makeId() {
  return crypto.randomUUID()
}

const model = {
  contacts: [],
  calls: [],

  setContacts(contacts) {
    this.contacts = contacts
  },

  getContacts() {
    return this.contacts
  },

  getContactById(id) {
    return this.contacts.find(contact => contact.id === id)
  },
  getCallByPhoneNumber(phoneNumber) {
    return this.calls.find(call => call.phoneNumber.phoneNumber === phoneNumber)
  },
  getContactByPhone(phoneNumber) {
    return this.contacts.find(contact => contact.phoneNumber === phoneNumber)
  },

  getFavoritesContacts() {
    return this.contacts.filter(c => c.inFavorites)
  },

  updateCallsWithContactsData() {
    this.calls.forEach(call => {
      const contact = this.contacts.find(
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

  setCalls(calls) {
    this.calls = calls
  },

  getCalls() {
    return this.calls
  },

  addSecondsAgoToCall() {
    this.calls.forEach(
      call =>
        (call.getSecondAgo = function () {
          return Math.floor((Date.now() - this.timestampCreated) / 1000)
        })
    )
  },

  addFavorites(id) {
    const contact = this.contacts.find(c => c.id === id)
    contact.inFavorites = true
  },

  removeFavorites(id) {
    const contact = this.contacts.find(c => c.id === id)
    contact.inFavorites = false
  },

  deleteContactById(id) {
    this.contacts = this.contacts.filter(contact => {
      return contact.id !== id
    })
  },

  addContact(contact) {
    if (hasEmptyField(contact)) return

    const createdContact = {
      id: makeId(),
      inFavorites: false,
      timestampCreated: new Date(),
    }

    Object.assign(createdContact, contact)
    this.contacts.push(createdContact)
  },

  editContactById(id, contact) {
    if (hasEmptyField(contact)) return
    const findedContact = this.getContactById(id)
    Object.assign(findedContact, contact)
  },

  checkCallsWithContact() {
    this.calls.forEach(call => {
      call.contactExist = this.contacts.some(
        contact => contact.phoneNumber === call.phoneNumber.phoneNumber
      )
    })
  },

  // addCall(phoneNumber) {
  //   const contact = this.getContactByPhone(phoneNumber)
  //   const call = {
  //     phoneNumber: phoneNumber,
  //     timestampCreated: Date.now(),
  //     getSecondAgo() {
  //       const timestampCurrent = Date.now()
  //       const timestampDelta = timestampCurrent - this.timestampCreated
  //       const seconds = timestampDelta / 1000
  //       console.log(Math.floor(seconds))
  //       return Math.floor(seconds)
  //     },
  //     // TODO: look double invoke
  //     declination: getDeclination(this.getSecondAgo()),
  //   }
  //   if (contact) call.contact = contact
  //   this.calls.unshift(call)
  // },

  addCall(phoneNumber) {
    const contact = this.getContactByPhone(phoneNumber)

    const call = {
      phoneNumber: phoneNumber,
      timestampCreated: Date.now(),
      getSecondAgo() {
        const timestampCurrent = Date.now()
        const timestampDelta = timestampCurrent - this.timestampCreated
        const seconds = timestampDelta / 1000
        return Math.floor(seconds)
      },

      get declination() {
        return getDeclination(this.getSecondAgo())
      },
    }

    if (contact) call.contact = contact

    this.calls.unshift(call)
  },

  searchContacts(query) {
    const queries = query
      .toLowerCase()
      .split(' ')
      .filter(q => q)

    return this.contacts
      .filter(contact => {
        const isPropertyContainQuery = queries.map(q => {
          return (
            contact.name.toLowerCase().includes(q) ||
            contact.familyName.toLowerCase().includes(q)
          )
        })
        contact.includesCount = isPropertyContainQuery.filter(
          item => item
        ).length
        return contact.includesCount
      })
      .toSorted((item, prevItem) => prevItem.includesCount - item.includesCount)
      .map(contact => (delete contact.includesCount, contact))
  },
}
