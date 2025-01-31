const view = {
  onLoaded() {
    this.addEventListeners()
    controller.onLoadPageHandler()
  },

  addEventListeners() {
    // const elAddContactBtn = document.querySelector('#appAddContact')
    const elOpenModal1Btn = document.querySelector('#elFab')
    const elInputSearch = document.querySelector('#search')
    // elAddContactBtn.addEventListener('click', this.onClickAddContactBtn)
    elOpenModal1Btn.addEventListener('click', this.onClickOpenModal1Btn)
    elInputSearch.addEventListener('input', view.onInputSearchInput)
  },

  onClickAddContactBtn() {
    const elFirstNameInput = document.querySelector('#firstName')
    const elSecondNameInput = document.querySelector('#secondName')
    const elPhoneInput = document.querySelector('#phone')
    const newContact = {
      name: elFirstNameInput.value,
      famelyName: elSecondNameInput.value,
      phoneNumber: elPhoneInput.value,
    }
    controller.addContactHandler(newContact)

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

  onClickAddRemoveFavoritesBtn() {
    const id = this.id
    controller.addRemoveFavoritesHandler(id)
  },

  onClickEditContactIconModal2() {
    const id = this.id
    controller.openModal1Handler(id)
  },

  renderModal1AddNewContact() {
    const elModal1h5 = document.querySelector('#modal1').querySelector('h5')
    elModal1h5.innerText = 'Добавить контакт'

    const elEditContactBtn = document
      .querySelector('#modal1')
      .querySelector('#appAddContact')
      .querySelector('span')

    elEditContactBtn.innerText = 'Добавить'

    const elAddContactBtn = document.querySelector('#appAddContact')
    elAddContactBtn.removeEventListener('click', this.onClickEditContactBtn)
    elAddContactBtn.addEventListener('click', this.onClickAddContactBtn)

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

  renderModal1EditContact(contact, id) {
    const elModal1h5 = document.querySelector('#modal1').querySelector('h5')
    elModal1h5.innerText = 'Редактировать контакт'
    elModal1h5.setAttribute('id', `${id}`)

    const elEditContactBtn = document
      .querySelector('#modal1')
      .querySelector('#appAddContact')
      .querySelector('span')

    elEditContactBtn.innerText = 'Редактировать'
    const elAddContactBtn = document.querySelector('#appAddContact')

    elAddContactBtn.removeEventListener('click', view.onClickAddContactBtn)
    elAddContactBtn.addEventListener('click', view.onClickEditContactBtn)

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

  onClickEditContactBtn() {
    const elModal1h5 = document.querySelector('#modal1').querySelector('h5')
    const id = elModal1h5.getAttribute('id')

    const elFirstNameInput = document
      .querySelector('#modal1')
      .querySelector('#firstName')

    const elSecondNameInput = document
      .querySelector('#modal1')
      .querySelector('#secondName')

    const elPhoneInput = document
      .querySelector('#modal1')
      .querySelector('#phone')

    controller.editContactHandler(
      id,
      elFirstNameInput.value,
      elSecondNameInput.value,
      elPhoneInput.value
    )
    elModal1h5.removeAttribute('id')
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

  renderModal2EditContact(contact) {
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
      generator.generateFavoritesEditDeleteButtonsModal2(contact)

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
    console.log(id)

    controller.onClickMakeCallHandler(id)
  },

  renderCallsTab2(calls) {
    const elUlCallsList = document.querySelector('#app-recent-calls')

    elUlCallsList.innerHTML = ''

    calls.forEach(call => {
      const genCall = generator.generateCallTab2(call)
      elUlCallsList.appendChild(genCall)
    })
  },

  renderFavoritesTab1(contacts) {
    const elDivFavoritesWrapper = document.querySelector('#app-favorites')
    elDivFavoritesWrapper.innerHTML = ''
    contacts.forEach(cont => {
      const contact = generator.generateFavoritesCardTab1(cont)
      elDivFavoritesWrapper.appendChild(contact)
    })
  },

  onClickFavoritesCardTab1() {
    const id = this.id
    controller.onClickMakeCallHandler(id)
  },

  onInputSearchInput(e) {
    controller.onInputSearchHandler(e.target.value)
  },

  renderSearchModal3(searchedContacts) {
    const searchResultListModal3 = document
      .querySelector('#modal3')
      .querySelector('.collection')
    searchResultListModal3.innerHTML = ''
    if (searchedContacts === '') {
      return
    } else {
      searchedContacts.forEach(contact => {
        const searchItem = generator.generateSearchCard(contact)
        searchResultListModal3.appendChild(searchItem)
      })
    }
  },
}
setInterval(controller.renderCallsTab2HandlerEvery10Sec, 10000)
document.addEventListener('DOMContentLoaded', view.onLoaded.bind(view))
