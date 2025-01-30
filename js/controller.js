const controller = {
  onLoadPageHandler() {
    let contacts = storage.restoreContacts()
    let calles = storage.restoreCalles()
    model.setCalles(calles)
    model.setContacts(contacts)
    contacts = model.getContacts()
    const favouriteContacts = model.getFavouritesContacts()
    calles = model.getCalles()
    view.renderCallesTab2(calles)
    view.renderTab3Contacts(contacts)
    view.renderFavouritesTab1(favouriteContacts)
  },

  addContactHandler(name, famelyName, number) {
    model.addContact(name, famelyName, number)
    const contacts = model.getContacts()
    storage.saveContacts(model.contacts)
    view.renderTab3Contacts(contacts)
  },

  handleOpenModal2(id) {
    const contact = model.getContactById(id)
    view.renderModal2EditContact(contact)
  },

  addRemoveFavouritesHandler(id) {
    model.addRemoveFavourites(id)
    const contacts = model.getContacts()
    storage.saveContacts(model.contacts)
    view.renderTab3Contacts(contacts)
    const favouriteContacts = model.getFavouritesContacts()

    view.renderFavouritesTab1(favouriteContacts)
  },

  deleteContactHandler(id) {
    model.deleteContactById(id)
    const contacst = model.getContacts()
    storage.saveContacts(model.contacts)
    view.renderTab3Contacts(contacst)
  },

  openModal1Handler(id) {
    const contact = model.getContactById(id)
    view.renderModal1EditContact(contact, id)
  },
  editContactHandler(id, editedName, editedFamelyName, editedPhone) {
    const editedContact = {
      name: editedName,
      famelyName: editedFamelyName,
      phoneNumber: editedPhone,
    }
    model.editContactById(id, editedContact)
    const contacst = model.getContacts()
    storage.saveContacts(model.contacts)
    view.renderTab3Contacts(contacst)
  },
  onClickMakeCallHandler(id) {
    const contact = model.getContactById(id)
    model.addCall(contact)
    const calles = model.getCalles()
    storage.saveCalles(model.calles)
    view.renderCallesTab2(calles)
  },

  onInputSearchHandler(searchPar) {
    const seachedContacts = model.searchContacts(searchPar)
    view.renderSearchModal3(seachedContacts)
  },
  renderCallsTab2HandlerEvery10Sec() {
    const calles = model.getCalles()

    if (calles.length > 0) {
      model.calcCallesMekedSecondsDiff()
      view.renderCallesTab2(calles)
    }
  },
}
