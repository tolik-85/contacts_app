const model = {
  contacts: [],
  // recentCalls
  calls: [],

  getDeclination(number) {
    const declination = {
      секунду: [1],
      секунды: [2, 3, 4],
      секунд: [0, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    }

    const numStr = number.toString()
    const lastTwoDigits = Number(numStr.slice(-2))
    const lastDigit = Number(numStr.slice(-1))

    if (declination.секунд.includes(lastTwoDigits)) {
      // call.declination = 'секунд'
      return 'секунд'
    }

    if (declination.секунду.includes(lastDigit)) {
      // call.declination = 'секунду'
      return 'секунду'
    }
    if (declination.секунды.includes(lastDigit)) {
      // call.declination = 'секунды'
      return 'секунды'
    }

    // call.declination = 'секунд'
    return 'секунд'
  },

  calcCallsMakedSecondsDiff() {
    // timestampCurrent
    let timeStamp = Date.now()

    this.calls.forEach(call => {
      // timestampDelta = timestampCurrent - timestamp
      const secondsOfCall = (timeStamp - call.dateOfCall) / 1000
      call.secondsOfCall = Math.floor(secondsOfCall)
    })
  },

  // !!addContact(contact)
  addContact(newContact) {
    if (
      newContact.name === '' ||
      newContact.familyName === '' ||
      newContact.phoneNumber === ''
    ) {
      return
    } else {
      const contact = {
        id: this.makeId(),
        inFavorites: false,
        dateOfCreation: new Date(),
      }
      Object.assign(contact, newContact)
      this.contacts.push(contact)
    }
  },

  // updateContactById(id, contact)
  editContactById(id, editedContact) {
    if (
      editedContact.name === '' ||
      editedContact.familyName === '' ||
      editedContact.phoneNumber === ''
    ) {
      return
    } else {
      const contact = this.getContactById(id)
      Object.assign(contact, editedContact)
    }
  },

  makeId() {
    return crypto.randomUUID()
  },

  addCall(contact) {
    const call = {
      id: contact.id,
      phoneNumber: contact.phoneNumber,
      // timestamp
      dateOfCall: Date.now(),
      // timestampDelta
      secondsOfCall: 0,
      declination: 'секунд',
    }
    this.calls.unshift(call)
  },

  setContacts(contacts) {
    this.contacts = contacts
  },

  setCalls(calls) {
    this.calls = calls
  },

  getContacts() {
    return this.contacts
  },

  getCalls() {
    return this.calls
  },

  // searchContacts(query) {
  //   let searchQuery = query.toLowerCase().trim()

  //   if (searchQuery === '') {
  //     console.log('1', searchQuery)
  //     return ''
  //   }

  //   searchQuery = searchQuery.split(' ')

  //   if (searchQuery.length > 1) {
  //     console.log('2', searchQuery)
  //     const searchContacts = this.contacts.filter(contact => {
  //       return (
  //         contact.name.toLowerCase().includes(query[0]) &&
  //         contact.familyName.toLowerCase().includes(query[1])
  //       )
  //     })
  //     return searchContacts
  //   } else {
  //     console.log('3', searchQuery)

  //     const searchContacts = this.contacts.filter(contact => {
  //       return (
  //         contact.name.toLowerCase().includes(searchQuery) ||
  //         contact.familyName.toLowerCase().includes(searchQuery)
  //       )
  //     })
  //     console.log('searchContacts', searchContacts)
  //     return searchContacts
  //   }
  // },
  searchContacts(fullName) {
    // Убираем лишние пробелы и приводим к нижнему регистру
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

  getFavoritesContacts() {
    return this.contacts.filter(c => c.inFavorites)
  },

  getContactById(id) {
    const contact = this.contacts.find(contact => {
      return contact.id === id
    })
    return contact
  },

  addRemoveFavorites(id) {
    const contact = this.contacts.find(c => c.id === id)
    contact.inFavorites = !contact.inFavorites
  },

  deleteContactById(id) {
    this.contacts = this.contacts.filter(contact => {
      return contact.id !== id
    })
  },
}
