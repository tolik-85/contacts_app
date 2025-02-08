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

  getContactByPhone(phoneNumber) {
    return this.contacts.find(contact => contact.phoneNumber === phoneNumber)
  },

  getFavoritesContacts() {
    return this.contacts.filter(c => c.inFavorites)
  },

  setCalls(calls) {
    this.calls = calls
  },

  getCalls() {
    return this.calls
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
    if (hasEmptyField(createdContact)) return

    const createdContact = {
      id: makeId(),
      inFavorites: false,
      timestampCreated: new Date(),
    }

    Object.assign(createdContact, contact)
    this.contacts.push(createdContact)
  },

  editContactById(id, contact) {
    // TODO: refactor if
    if (
      contact.name === '' ||
      contact.familyName === '' ||
      contact.phoneNumber === ''
    ) {
      return
    } else {
      const findedContact = this.getContactById(id)
      Object.assign(findedContact, contact)
    }
  },

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

      // TODO: look double invoke
      declination: getDeclination(this.getSecondAgo()),
    }

    if (contact) call.contact = contact

    this.calls.unshift(call)
  },

  searchContacts(fullName) {
    const cleanInput = fullName.trim().toLowerCase()
    if (!cleanInput) return [] // Если только пробелы — возвращаем пустой массив
    // Разбиваем строку на части (по пробелу) или работаем как с одной строкой, если пробелов нет
    const searchParts = cleanInput.includes(' ')
      ? cleanInput.split(' ')
      : [cleanInput]

    return this.contacts
      .filter(contact => {
        const nameLower = contact.name.toLowerCase()
        const familyLower = contact.familyName.toLowerCase()
        // Проверяем, начинается ли name или familyName с любой части searchParts
        return searchParts.some(
          part => nameLower.startsWith(part) || familyLower.startsWith(part)
        )
      })
      .sort((a, b) => {
        const nameLowerA = a.name.toLowerCase(),
          familyLowerA = a.familyName.toLowerCase()
        const nameLowerB = b.name.toLowerCase(),
          familyLowerB = b.familyName.toLowerCase()
        // Подсчет совпадений (ищем по началу слова)
        const aMatch = searchParts.filter(
          part => nameLowerA.startsWith(part) || familyLowerA.startsWith(part)
        ).length
        const bMatch = searchParts.filter(
          part => nameLowerB.startsWith(part) || familyLowerB.startsWith(part)
        ).length
        return bMatch - aMatch // Чем больше совпадений, тем выше результат
      })
  },
}
