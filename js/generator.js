const generator = {
  generateContactTab3(cont) {
    const elLiContact = document.createElement('li')
    elLiContact.setAttribute('href', '#modal2')
    elLiContact.setAttribute('id', cont.id)
    elLiContact.classList.add('contact')
    elLiContact.classList.add('modal-trigger')
    elLiContact.classList.add('collection-item')
    elLiContact.classList.add('transparent')
    elLiContact.classList.add('waves-effect')

    const elContainer = document.createElement('div')
    elContainer.classList.add('container')

    const elContactWrapper = document.createElement('div')
    elContactWrapper.classList.add('row')
    elContactWrapper.classList.add('valign-wrapper')

    const elDivCol1 = document.createElement('div')
    elDivCol1.classList.add('col')
    elDivCol1.classList.add('s4')

    const elSpanInCol1Person = document.createElement('span')
    elSpanInCol1Person.classList.add('teal')
    elSpanInCol1Person.classList.add('darken-1')
    elSpanInCol1Person.classList.add('teal-text')
    elSpanInCol1Person.classList.add('text-lighten-4')
    elSpanInCol1Person.classList.add('pic')
    elSpanInCol1Person.classList.add('circle')
    elSpanInCol1Person.classList.add('center-align')
    elSpanInCol1Person.classList.add('material-symbols-outlined')
    elSpanInCol1Person.innerText = 'person'

    const elDivCol2 = document.createElement('div')
    elDivCol2.classList.add('col')
    elDivCol2.classList.add('s4')
    const elSpanCol2 = document.createElement('span')
    const elB = document.createElement('b')
    elB.innerText = `${cont.name} ${cont.familyName}`

    const elDivCol3 = document.createElement('div')
    elDivCol3.classList.add('col')
    elDivCol3.classList.add('s4')
    const elSpanCol3 = document.createElement('span')
    elSpanCol3.classList.add('badge')
    elSpanCol3.classList.add('new')
    elSpanCol3.innerText = 'phone'

    elDivCol3.appendChild(elSpanCol3)
    elSpanCol2.appendChild(elB)
    elDivCol2.appendChild(elSpanCol2)
    elDivCol1.appendChild(elSpanInCol1Person)
    elContactWrapper.appendChild(elDivCol1)
    elContactWrapper.appendChild(elDivCol2)
    elContactWrapper.appendChild(elDivCol3)
    elContainer.appendChild(elContactWrapper)
    elLiContact.appendChild(elContainer)

    elLiContact.addEventListener('click', view.onClickElLiContactTab3)

    return elLiContact
  },

  generateFavoritesEditDeleteButtonsModal2(contact) {
    const elDivContainerButtons = document.createElement('div')
    elDivContainerButtons.classList.add('col')
    elDivContainerButtons.classList.add('s6')
    elDivContainerButtons.classList.add('right-align')
    elDivContainerButtons.classList.add('teal-text')
    elDivContainerButtons.classList.add('text-lighten-5')

    const addToFavoritesButton = generator.generateStarFavoritesModal2(contact)

    const editButton = document.createElement('span')
    editButton.setAttribute('id', `${contact.id}`)
    editButton.setAttribute('href', '#modal1')
    editButton.classList.add('modal-trigger')
    editButton.classList.add('modal-close')
    editButton.classList.add('material-symbols-outlined')
    editButton.innerText = 'edit'

    const deleteButton = document.createElement('span')
    deleteButton.setAttribute('id', `${contact.id}`)
    deleteButton.classList.add('modal-close')
    deleteButton.classList.add('material-symbols-outlined')
    deleteButton.innerText = 'delete'
    deleteButton.addEventListener('click', view.onClickDeleteContactBtn)

    elDivContainerButtons.appendChild(addToFavoritesButton)
    elDivContainerButtons.appendChild(editButton)
    elDivContainerButtons.appendChild(deleteButton)
    editButton.addEventListener('click', view.onClickEditContactIconModal2)
    return elDivContainerButtons
  },

  generateStarFavoritesModal2(contact) {
    if (contact.inFavorites) {
      const starFavoritesTrue = document.createElement('span')
      starFavoritesTrue.setAttribute('id', `${contact.id}`)
      starFavoritesTrue.classList.add('modal-close')
      starFavoritesTrue.classList.add('material-symbols-outlined')
      starFavoritesTrue.innerText = 'star'
      starFavoritesTrue.addEventListener(
        'click',
        view.onClickAddRemoveFavoritesBtn
      )
      return starFavoritesTrue
    } else {
      const starFavoritesFalse = document.createElement('span')
      starFavoritesFalse.setAttribute('id', `${contact.id}`)
      starFavoritesFalse.classList.add('modal-close')
      starFavoritesFalse.classList.add('material-symbols-outlined')
      starFavoritesFalse.classList.add('non-fill')
      starFavoritesFalse.innerText = 'star'
      starFavoritesFalse.addEventListener(
        'click',
        view.onClickAddRemoveFavoritesBtn
      )
      return starFavoritesFalse
    }
  },

  generateContactModal2(contact) {
    const elLiContact = document.createElement('li')
    elLiContact.classList.add('modal-close')
    elLiContact.classList.add('waves-effect')
    elLiContact.classList.add('collection-item')
    elLiContact.classList.add('avatar')
    elLiContact.classList.add('transparent')
    elLiContact.classList.add('z-depth-1')
    elLiContact.setAttribute('id', `${contact.id}`)
    elLiContact.addEventListener('click', view.onClickMakeCallModal2)

    const elIcontactIcon = document.createElement('i')
    elIcontactIcon.classList.add('material-icons')
    elIcontactIcon.classList.add('circle')
    elIcontactIcon.classList.add('teal')
    elIcontactIcon.classList.add('darken-3')
    elIcontactIcon.innerText = 'person'

    const elSpanTitle = document.createElement('span')
    elSpanTitle.classList.add('title')

    const elBPhoneNumber = document.createElement('b')
    elBPhoneNumber.innerText = `${contact.phoneNumber}`

    const elPdate = document.createElement('p')
    const elIdate = document.createElement('i')
    elIdate.innerText = `Добавлен: ${contact.dateOfCreation}`

    const elAphoneIcon = document.createElement('a')
    elAphoneIcon.setAttribute('href', '#')
    elAphoneIcon.setAttribute('draggable', 'false')
    elAphoneIcon.classList.add('secondary-content')

    const elIelphoneIcon = document.createElement('i')
    elIelphoneIcon.classList.add('material-icons')
    elIelphoneIcon.innerText = 'phone'

    elAphoneIcon.appendChild(elIelphoneIcon)
    elPdate.appendChild(elIdate)
    elSpanTitle.appendChild(elBPhoneNumber)
    elLiContact.appendChild(elIcontactIcon)
    elLiContact.appendChild(elSpanTitle)
    elLiContact.appendChild(elPdate)
    elLiContact.appendChild(elAphoneIcon)

    return elLiContact
  },

  generateCallTab2(call) {
    const elLiCallWrapper = document.createElement('li')
    elLiCallWrapper.classList.add('recent-call')
    elLiCallWrapper.classList.add('waves-effect')
    elLiCallWrapper.classList.add('collection-item')
    elLiCallWrapper.classList.add('avatar')
    elLiCallWrapper.classList.add('transparent')
    elLiCallWrapper.classList.add('z-depth-1')

    const elIcontactIcon = document.createElement('i')
    elIcontactIcon.classList.add('material-icons')
    elIcontactIcon.classList.add('circle')
    elIcontactIcon.classList.add('teal')
    elIcontactIcon.classList.add('darken-3')
    elIcontactIcon.innerText = 'person'

    const elSpanPhoneNumber = document.createElement('span')
    elSpanPhoneNumber.classList.add('title')
    const elBPhoneNumber = document.createElement('b')
    elBPhoneNumber.innerText = `${call.phoneNumber}`

    const elPtimeStamp = document.createElement('p')
    const elItimeStamp = document.createElement('i')
    elItimeStamp.innerText = `Звонок совершен ${call.secondsOfCall} секунд назад`

    const elAcontactIcon = document.createElement('a')
    elAcontactIcon.classList.add('secondary-content')
    elAcontactIcon.setAttribute('href', '#!')
    elAcontactIcon.setAttribute('draggable', 'false')

    const elIphoneIcon = document.createElement('i')
    elIphoneIcon.classList.add('material-icons')
    elIphoneIcon.innerText = 'phone'

    elAcontactIcon.appendChild(elIphoneIcon)
    elPtimeStamp.appendChild(elItimeStamp)
    elSpanPhoneNumber.appendChild(elBPhoneNumber)
    elLiCallWrapper.appendChild(elIcontactIcon)
    elLiCallWrapper.appendChild(elSpanPhoneNumber)
    elLiCallWrapper.appendChild(elPtimeStamp)
    elLiCallWrapper.appendChild(elAcontactIcon)

    return elLiCallWrapper
  },

  generateFavoritesCardTab1(contact) {
    const elDivCardWrapper = document.createElement('div')
    elDivCardWrapper.classList.add('favorite')
    elDivCardWrapper.classList.add('col')
    elDivCardWrapper.classList.add('s6')
    elDivCardWrapper.classList.add('m4')
    elDivCardWrapper.classList.add('l3')
    elDivCardWrapper.classList.add('xl2')
    elDivCardWrapper.setAttribute('id', `${contact.id}`)

    const elDivCard = document.createElement('div')
    elDivCard.classList.add('card-panel')
    elDivCard.classList.add('teal')
    elDivCard.classList.add('lighten-2')
    elDivCard.classList.add('waves-effect')
    elDivCard.classList.add('waves-light')

    const elDivCardIcon = document.createElement('div')
    elDivCardIcon.classList.add('center-align')

    const elSpanCardIcon = document.createElement('span')
    elSpanCardIcon.classList.add('transparent')
    elSpanCardIcon.classList.add('teal-text')
    elSpanCardIcon.classList.add('text-lighten-5')
    elSpanCardIcon.classList.add('pic')
    elSpanCardIcon.classList.add('center-align')
    elSpanCardIcon.classList.add('material-symbols-outlined')
    elSpanCardIcon.innerText = 'person'

    const elSpanContactName = document.createElement('span')
    elSpanContactName.classList.add('white-text')
    elSpanContactName.innerText = `${contact.name} ${contact.familyName}`

    elDivCardIcon.appendChild(elSpanCardIcon)
    elDivCard.appendChild(elDivCardIcon)
    elDivCard.appendChild(elSpanContactName)
    elDivCardWrapper.appendChild(elDivCard)
    elDivCardWrapper.addEventListener('click', view.onClickFavoritesCardTab1)

    return elDivCardWrapper
  },

  generateSearchCard(contact) {
    const elLiContactWrapper = document.createElement('li')
    elLiContactWrapper.classList.add('collection-item')
    elLiContactWrapper.classList.add('avatar')
    elLiContactWrapper.setAttribute('id', contact.id)
    elLiContactWrapper.addEventListener('click', view.onClickMakeCallModal2)

    const elIcontactAvatar = document.createElement('i')
    elIcontactAvatar.classList.add('material-icons')
    elIcontactAvatar.classList.add('circle')
    elIcontactAvatar.classList.add('green')
    elIcontactAvatar.innerText = 'assessment'

    const elSpanContactName = document.createElement('span')
    elSpanContactName.classList.add('title')
    elSpanContactName.innerText = `${contact.name} ${contact.familyName}`

    const elPphoneNumber = document.createElement('p')
    elPphoneNumber.innerText = `${contact.phoneNumber}`

    const elAcontactPhoneIcon = document.createElement('a')
    elAcontactPhoneIcon.classList.add('secondary-content')
    elAcontactPhoneIcon.setAttribute('href', '#!')

    const elIcontactPhoneIcon = document.createElement('i')
    elIcontactPhoneIcon.classList.add('material-icons')
    elIcontactPhoneIcon.innerText = 'phone'

    elAcontactPhoneIcon.appendChild(elIcontactPhoneIcon)
    elLiContactWrapper.appendChild(elIcontactAvatar)
    elLiContactWrapper.appendChild(elSpanContactName)
    elLiContactWrapper.appendChild(elPphoneNumber)
    elLiContactWrapper.appendChild(elAcontactPhoneIcon)

    return elLiContactWrapper
  },
}
