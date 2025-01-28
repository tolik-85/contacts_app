const controller = {
  addContactHandler(name, famelyName, number) {
    model.checkContact(name, famelyName, number)
    const contacts = model.getContacts()
    view.renderTab3Contacts(contacts)
  },

  handleOpenModal2(id) {
    const contact = model.getContactById(id)
    view.renderModal2(contact)
  },

  addRemoveFavouritesHandler(id) {
    model.addRemoveFavourites(id)
    const contacts = model.getContacts()
    view.renderTab3Contacts(contacts)
    const favouriteContacts = model.getFavouritesContacts()
    console.log(favouriteContacts)

    view.renderFavouritesTab1(favouriteContacts)
  },
  deleteContactHandler(id) {
    model.deleteContactById(id)
    const contacst = model.getContacts()
    view.renderTab3Contacts(contacst)
  },
  editContactHandler(id) {
    console.log('controller', id)
    const contact = model.getContactById(id)
    console.log('controller', contact)
    view.renderModal1EditContact(contact)
  },
  onClickMakeCallHandler(id) {
    const contact = model.getContactById(id)
    model.addCall(contact)
    const calles = model.getCalles()
    view.renderCallesTab2(calles)
  },
  onInputSearchHandler(searchPar) {
    const seachedContacts = model.searchContacts(searchPar)
    view.renderSearchModal3(seachedContacts)
  },
}
