const controller = {
  onLoadPageHandler() {
    let contacts = storage.restoreContacts()
    let calls = storage.restoreCalls()
    model.setCalls(calls)
    model.setContacts(contacts)
    contacts = model.getContacts()
    const favoriteContacts = model.getFavoritesContacts()
    calls = model.getCalls()
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

  addRemoveFavoritesHandler(id) {
    model.addRemoveFavorites(id)
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
    const calls = model.getCalls()
    storage.saveCalls(model.calls)
    view.renderCallsTab2(calls)
  },

  onInputSearchHandler(searchPar) {
    const searchedContacts = model.searchContacts(searchPar)
    console.log('controller', searchedContacts)

    view.renderSearchModal3(searchedContacts)
  },

  renderCallsTab2HandlerEvery10Sec() {
    const calls = model.getCalls()
    if (calls.length > 0) {
      model.calcCallsMakedSecondsDiff()
      view.renderCallsTab2(calls)
    }
  },
}
