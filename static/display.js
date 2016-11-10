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
  }
}
