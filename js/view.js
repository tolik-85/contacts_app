const view = {
  onLoaded() {
    this.addEventListeners()
  },

  addEventListeners() {
    const elAddContactBtn = document.querySelector('#appAddContact')
    const elOpenModal1Btn = document.querySelector('#elFab')
    const elInputSearch = document.querySelector('#search')
    elAddContactBtn.addEventListener('click', this.onClickAddContactBtn)
    elOpenModal1Btn.addEventListener('click', this.onClickOpenModal1Btn)
    elInputSearch.addEventListener('input', view.onInputSearchInput)
  },

  onClickAddContactBtn() {
    const elFirstNameInput = document.querySelector('#firstName')
    const elSecondNameInput = document.querySelector('#secondName')
    const elPhoneInput = document.querySelector('#phone')

    controller.addContactHandler(
      elFirstNameInput.value,
      elSecondNameInput.value,
      elPhoneInput.value
    )

    elFirstNameInput.value = ''
    elSecondNameInput.value = ''
    elPhoneInput.value = ''
  },

  onClickOpenModal1Btn() {
    view.renderModal1AddNewContact()
  },

  onClickElLiContactTab3(e) {
    const id = this.id
    controller.handleOpenModal2(id)
  },

  onClickAddRemoveFavouritesBtn() {
    const id = this.id
    controller.addRemoveFavouritesHandler(id)
  },

  onClickEditContactIconModal2() {
    const id = this.id
    controller.editContactHandler(id)
  },

  renderModal1AddNewContact() {
    const elModal1h5 = document.querySelector('#modal1').querySelector('h5')
    elModal1h5.innerText = 'Добавить контакт'

    const elEditContactBtn = document
      .querySelector('#modal1')
      .querySelector('#appAddContact')
      .querySelector('span')

    elEditContactBtn.innerText = 'Добавить'

    const elFirstNameLabel = document.querySelector('[for="firstName"]')
    const elSecondNameeLabel = document.querySelector('[for="secondName"]')
    const elPhoneLabel = document.querySelector('[for="phone"]')

    elFirstNameLabel.classList.remove('active')
    elSecondNameeLabel.classList.remove('active')
    elPhoneLabel.classList.remove('active')

    const elFirstNameInput = document.querySelector('#firstName')
    const elSecondNameInput = document.querySelector('#secondName')
    const elPhoneInput = document.querySelector('#phone')

    elFirstNameInput.value = ''
    elSecondNameInput.value = ''
    elPhoneInput.value = ''
  },

  renderModal1EditContact(contact) {
    const elModal1h5 = document.querySelector('#modal1').querySelector('h5')
    elModal1h5.innerText = 'Редактировать контакт'

    const elEditContactBtn = document
      .querySelector('#modal1')
      .querySelector('#appAddContact')
      .querySelector('span')

    elEditContactBtn.innerText = 'Редактировать'

    const elFirstNameInput = document
      .querySelector('#modal1')
      .querySelector('#firstName')

    const elSecondNameInput = document
      .querySelector('#modal1')
      .querySelector('#secondName')

    const elPhoneInput = document
      .querySelector('#modal1')
      .querySelector('#phone')

    const elFirstNameLabel = document.querySelector('[for="firstName"]')
    const elSecondNameeLabel = document.querySelector('[for="secondName"]')
    const elPhoneLabel = document.querySelector('[for="phone"]')

    elFirstNameLabel.classList.add('active')
    elSecondNameeLabel.classList.add('active')
    elPhoneLabel.classList.add('active')

    elFirstNameInput.value = contact.name
    elSecondNameInput.value = contact.famelyName
    elPhoneInput.value = contact.phoneNumber
  },

  onClickDeleteContactBtn(e) {
    const id = this.id
    controller.deleteContactHandler(id)
  },

  renderTab3Contacts(contacts) {
    const elAppContacts = document.querySelector('#app-contacts')
    elAppContacts.innerHTML = ''
    contacts.forEach(cont => {
      const contact = generator.generateContactTab3(cont)
      elAppContacts.appendChild(contact)
    })
  },

  renderModal2(contact) {
    const elH5NameFamelyName = document
      .querySelector('#modal2')
      .querySelector('h5')
    elH5NameFamelyName.innerText = `${contact.name} ${contact.famelyName}`

    const elDivRow = document.querySelector('#modal2').querySelector('.row')
    const elButtonsContainer = document
      .querySelector('#modal2')
      .querySelector('.row')
      .querySelector('.text-lighten-5')

    const EditButtons =
      generator.generateFavouritesEditDeleteButtonsModal2(contact)

    elButtonsContainer.remove()
    elDivRow.appendChild(EditButtons)

    const elUlContactContainer = document
      .querySelector('#modal2')
      .querySelector('.container')
      .querySelector('.collection')
    elUlContactContainer.innerHTML = ''
    const elLiContact = generator.generateContactModal2(contact)
    elUlContactContainer.appendChild(elLiContact)
  },

  onClickMakeCallModal2() {
    const id = this.id
    controller.onClickMakeCallHandler(id)
  },

  renderCallesTab2(calles) {
    const elUlCallesList = document.querySelector('#app-recent-calls')

    elUlCallesList.innerHTML = ''

    calles.forEach(call => {
      const genCall = generator.generateCallTab2(call)
      elUlCallesList.appendChild(genCall)
    })
  },

  renderFavouritesTab1(contacts) {
    const elDivFavouritesWrapper = document.querySelector('#app-favorites')
    elDivFavouritesWrapper.innerHTML = ''
    contacts.forEach(cont => {
      const contact = generator.generateFavouritesCardTab1(cont)
      elDivFavouritesWrapper.appendChild(contact)
    })
  },

  onClickFavouritesCardTab1() {
    const id = this.id
    controller.onClickMakeCallHandler(id)
  },
  onInputSearchInput(e) {
    controller.onInputSearchHandler(e.target.value)
  },
  renderSearchModal3(seachedContacts) {
    const searchResultListModal3 = document
      .querySelector('#modal3')
      .querySelector('.collection')
    searchResultListModal3.innerHTML = ''
    seachedContacts.forEach(contact => {
      const searchItem = generator.generateSearchCard(contact)
      searchResultListModal3.appendChild(searchItem)
    })
  },
}
document.addEventListener('DOMContentLoaded', view.onLoaded.bind(view))
