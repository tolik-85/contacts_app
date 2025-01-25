const view = {
  onLoaded() {
    this.addEventListeners()
  },

  addEventListeners() {
    const elAddContactBtn = document.querySelector('#appAddContact')
    elAddContactBtn.addEventListener('click', this.onClickAddContactBtn)
  },

  onClickAddContactBtn(e) {
    const elFirstNameInput = document.querySelector('#firstName')
    const elSecondNameInput = document.querySelector('#secondName')
    const elPhoneInput = document.querySelector('#phone')

    controller.addContactHandler(
      elFirstNameInput.value,
      elSecondNameInput.value,
      elPhoneInput.value
    )
  },

  onClickElLiContact(e) {
    const elBcontactName =
      e.target.parentNode.parentNode.querySelector('span b')
    const contact = elBcontactName.innerHTML.split(' ')
    controller.handleModal2(contact[0], contact[1])
  },

  renderTab3Contacts(contacts) {
    const elAppContacts = document.querySelector('#app-contacts')
    elAppContacts.innerHTML = ''
    contacts.forEach(cont => {
      const contact = generator.generateContact(cont.name, cont.famelyName)
      elAppContacts.appendChild(contact)
    })
  },

  renderModal2(contact) {
    const elH5NameFamelyName = document
      .querySelector('#modal2')
      .querySelector('h5')
    elH5NameFamelyName.innerText = `${contact.name} ${contact.famelyName}`
  },
}
document.addEventListener('DOMContentLoaded', view.onLoaded.bind(view))
