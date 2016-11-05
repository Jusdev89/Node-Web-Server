let index = 1
const Item = JSON.parse( localStorage.getItem( 'Items' ) )

const setItem = todoItem => {
  console.log( Item )
  console.log( Array.isArray( Item ) )

  if ( Item ) {
    console.log( typeof Item )
    Item.push( todoItem )
    localStorage.setItem( 'Items', JSON.stringify( Item ) )
  } else {
    const ItemContainer  = []
    ItemContainer.push( todoItem )
    localStorage.setItem('Items', JSON.stringify( ItemContainer ) )
  }
}

const displayInput = () => {

  const listItem = document.createElement("DIV")
  listItem.setAttribute("id", `displayInputHtml${ index }`)
  document.body.appendChild( listItem )
  const displayInputHtml = document.querySelector( `div#displayInputHtml${ index }` )

  const input = document.querySelector( 'input#display-input' )
  const text = displayInputHtml.innerText = `${ index }. ${ input.value }`

  setItem( `${ index }. ${ input.value }` )

  ++index
  return text
}
