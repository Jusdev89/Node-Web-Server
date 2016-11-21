const Display = new function() {
  this.updateEvent = () => {
    listItem.innerHTML = `
      <input type="text" id="inputValue${index}" value=${todo ? todo.value : input.value} />`
      let updateInput = document.querySelector( `#inputValue${index}` )
      updateInput.focus()
      updateInput.addEventListener( 'keypress', e => {
        const keynum = e.keyCode||e.which
        if(keynum == 13) {
          update({Item, todoValue: updateInput.value, index})
        }
      })
  }
  this.multipleEventListeners = (el, string, func) => {
    string.split(' ').forEach(e => el.addEventListener(e, func, false))
  }
  return {
    container: () => document.querySelector( '.mui-container' ),
    item: index =>  {
      const listItem = document.createElement("DIV")
      listItem.setAttribute("id", `displayInputHtml${ index }`)
      return listItem
    },
    input: index => {
      const displayInputHtml = document.querySelector( `div#displayInputHtml${ index }` )
      const input = document.querySelector( '#display-input::shadow input' )
      const text = displayInputHtml.innerText = `${ input.value }`
      return text
    },
    renderView: ({ index, todo, Item }) => {
      const divContainer = document.querySelector( '.mui-container' )
      const listItem = document.createElement("DIV")
      listItem.setAttribute("id", `displayInputHtml${ index }`)
      listItem.setAttribute("class", 'mui-panel')
      divContainer.appendChild(listItem)
      const input = document.querySelector( '#display-input::shadow input' )

      listItem.onmouseover = () => {
        let editId = listItem.querySelector(`#edit-btn${index}`)
        console.log('Whats going on', !!editId)
        if (!editId) {
          listItem.insertAdjacentHTML(
            'beforeend',
            `<button id="edit-btn${index}" onclick="" class="mui-btn mui-btn--fab mui-btn--small mui-btn--primary">
              Edit
            </button>`
          )
          editId.addEventListener('click', event => {
            event.preventDefault()
            this.updateEvent({Item, todo, index})
          })
        }
      }

      const text = listItem.innerText = todo ? todo.value : `${ input.value }`
      return { text, listItem }
    },
    helpBox: () => {
      const helpBox = document.querySelector( '#wild-btn' )
      const countryContainer = document.querySelector('.todo-country')
      this.multipleEventListeners(helpBox, 'mouseover mouseleave click', event => {
        if (event.type === 'mouseleave') {
          helpBox.innerText = 'Click'
        }
        if(event.type === 'mouseover') {
          helpBox.innerText = `
            Hey there!!!!
            Choose a country.
            Create a todo list
            for all the countries
            ya wanna visit!!
            click here!
          `
        }
        if(event.type === 'click') {
          const options = {
            method: 'GET'
          }
          fetch('https://restcountries.eu/rest/v1/all', options)
            .then(response => response.json())
            .then(countries =>
              countries.forEach((country, index) => {
                if(index < 9) {
                  const countryNumber = document.createElement("DIV")
                  countryNumber.setAttribute("id", `country-#${index}`)
                  countryNumber.setAttribute("class", 'mui-col-md-4 mui-panel')
                  countryNumber.innerText = country.name
                  countryContainer.appendChild(countryNumber)
                }
              })
            )
            .catch(error => console.log(error))
        }
      })
    }
  }
}
