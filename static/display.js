const Display = {
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
  renderView: ({ index, todo, update, Item }) => {
    const divContainer = document.querySelector( '.mui-container' )
    const listItem = document.createElement("DIV")
    listItem.setAttribute("id", `displayInputHtml${ index }`)
    divContainer.appendChild(listItem)
    const input = document.querySelector( '#display-input::shadow input' )

    listItem.onmouseover = () => {
      listItem.innerHTML = `
        <input type="text" id="inputValue${index}" value=${todo ? todo.value : input.value} />`
        let updateInput = document.querySelector( `#inputValue${index}` )
        updateInput.focus()
        updateInput.addEventListener( 'keypress', e => {
          const keynum = e.keyCode||e.which

          console.log('Key Number', keynum)
          if(keynum == 13) {
            update({Item, todoValue: updateInput.value, index})
          }
        })
    }
    const text = listItem.innerText = todo ? todo.value : `${ input.value }`
    return { text, listItem }
  }
}
