const Message = {
  noItems: () => {
    const listItem = document.createElement("DIV")
    document.body.appendChild( listItem )
    listItem.setAttribute("id", 'not-found')
    const displayInputHtml = document.querySelector( 'div#not-found' )
    const text = displayInputHtml.innerText = 'No Items are created, Get started'
  }
}
