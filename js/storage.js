const storage = {
  saveContacts(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  },
  restoreContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    return contacts ?? []
  },
  saveCalles(calles) {
    localStorage.setItem('calles', JSON.stringify(calles))
  },
  restoreCalles() {
    const calles = JSON.parse(localStorage.getItem('calles'))
    return calles ?? []
  },
}
