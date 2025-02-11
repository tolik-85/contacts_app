const controller = {
  onLoadPageHandler() {
    let contacts = storage.restoreContacts()
    let calls = storage.restoreCalls()
    model.setCalls(calls)
    model.addSecondsAgoToCall()
    model.setContacts(contacts)
    contacts = model.getContacts()
    const favoriteContacts = model.getFavoritesContacts()
    calls = model.getCalls()
    model.checkCallsWithContact()
    view.renderCallsTab2(calls)
    view.renderTab3Contacts(contacts)
    view.renderFavoritesTab1(favoriteContacts)
  },

  addContactHandler(newContact) {
    model.addContact(newContact)
    const contacts = model.getContacts()
    storage.saveContacts(model.contacts)
    view.renderTab3Contacts(contacts)
  },

  handleOpenModal2(id) {
    const contact = model.getContactById(id)
    view.renderModal2EditContact(contact)
  },

  removeFavoritesHandler(id) {
    model.removeFavorites(id)
    const contacts = model.getContacts()
    storage.saveContacts(model.contacts)
    view.renderTab3Contacts(contacts)
    const favouriteContacts = model.getFavoritesContacts()
    view.renderFavoritesTab1(favouriteContacts)
  },
  addFavoritesHandler(id) {
    model.addFavorites(id)
    const contacts = model.getContacts()
    storage.saveContacts(model.contacts)
    view.renderTab3Contacts(contacts)
    const favouriteContacts = model.getFavoritesContacts()
    view.renderFavoritesTab1(favouriteContacts)
  },

  deleteContactHandler(id) {
    model.deleteContactById(id)
    const contacts = model.getContacts()
    storage.saveContacts(model.contacts)
    view.renderTab3Contacts(contacts)
    const favoriteContacts = model.getFavoritesContacts()
    view.renderFavoritesTab1(favoriteContacts)
    const calls = model.getCalls()
    model.checkCallsWithContact()
    view.renderCallsTab2(calls)
  },

  openModal1Handler(id) {
    const contact = model.getContactById(id)
    view.renderModal1EditContact(contact, id)
  },

  editContactHandler(id, editedContact) {
    model.editContactById(id, editedContact)
    const contacts = model.getContacts()
    storage.saveContacts(model.contacts)
    view.renderTab3Contacts(contacts)
    const favouriteContacts = model.getFavoritesContacts()
    view.renderFavoritesTab1(favouriteContacts)
  },

  onClickMakeCallHandler(id) {
    const contact = model.getContactById(id)
    model.addCall(contact)
    model.checkCallsWithContact()
    const calls = model.getCalls()
    storage.saveCalls(model.calls)
    model.checkCallsWithContact()
    view.renderCallsTab2(calls)
  },

  onInputSearchHandler(searchPar) {
    const searchedContacts = model.searchContacts(searchPar)

    view.renderSearchModal3(searchedContacts)
  },

  renderCallsTab2HandlerEvery10Sec() {
    model.checkCallsWithContact()
    const calls = model.getCalls()
    // console.log(calls)

    if (calls.length > 0) {
      view.renderCallsTab2(calls)
    }
  },
}
