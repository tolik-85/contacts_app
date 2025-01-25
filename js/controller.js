const controller = {
  addContactHandler(name, famelyName, number) {
    model.addContact(name, famelyName, number)
    const contacst = model.getContacts()
    view.renderTab3Contacts(contacst)
  },
  handleModal2(name, famelyName) {
    const contact = model.getContactByNameAndFamelyName(name, famelyName)
    view.renderModal2(contact)
  },
}
