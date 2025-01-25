const generator = {
  generateContact(name, famelyName) {
    const elLiContact = document.createElement('li')
    elLiContact.setAttribute('href', '#modal2')
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
    elB.innerText = `${name} ${famelyName}`

    const elDivCol3 = document.createElement('div')
    elDivCol3.classList.add('col')
    elDivCol3.classList.add('s4')
    const elSpanCol3 = document.createElement('span')
    elSpanCol3.classList.add('badge')
    elSpanCol3.classList.add('new')

    elDivCol3.appendChild(elSpanCol3)
    elSpanCol2.appendChild(elB)
    elDivCol2.appendChild(elSpanCol2)
    elDivCol1.appendChild(elSpanInCol1Person)
    elContactWrapper.appendChild(elDivCol1)
    elContactWrapper.appendChild(elDivCol2)
    elContactWrapper.appendChild(elDivCol3)
    elContainer.appendChild(elContactWrapper)
    elLiContact.appendChild(elContainer)

    elLiContact.addEventListener('click', view.onClickElLiContact)

    return elLiContact
  },

  // generateContact(name, famelyName) {
  //   const elLiContact = document.createElement('li')
  //   elLiContact.setAttribute('href', '#modal2')
  //   elLiContact.classList.add('contact')
  //   elLiContact.classList.add('modal-trigger')
  //   elLiContact.classList.add('collection-item')
  //   elLiContact.classList.add('transparent')
  //   elLiContact.classList.add('waves-effect')
  //   elLiContact.innerHTML = `
  //             <div class="container">
  //               <div class="row valign-wrapper">
  //                 <div class="col s4">
  //                   <span class="teal darken-1 teal-text text-lighten-4 pic circle center-align material-symbols-outlined">person</span>
  //                 </div>
  //                 <div class="col s4">
  //                   <span class=""><b>${name} ${famelyName}</b></span>
  //                 </div>
  //                 <div class="col s4">
  //                   <span class="badge new">phone</span>
  //                 </div>
  //               </div>
  //             </div>`

  //   return elLiContact
  // },
}
