const Message = {
  noItems: () => {
    const divContainer = document.querySelector( '.mui-container' )
    const listItem = document.createElement("DIV")
    divContainer.appendChild( listItem )
    listItem.setAttribute("id", 'not-found')
    const displayInputHtml = document.querySelector( 'div#not-found' )
    const text = displayInputHtml.innerText = 'No Items are created, Get started'
  }
}
