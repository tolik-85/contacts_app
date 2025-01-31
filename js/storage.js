const storage = {
  saveContacts(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  },
  restoreContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    return contacts ?? []
  },
  saveCalls(calls) {
    localStorage.setItem('calls', JSON.stringify(calls))
  },
  restoreCalls() {
    const calls = JSON.parse(localStorage.getItem('calls'))
    return calls ?? []
  },
}
