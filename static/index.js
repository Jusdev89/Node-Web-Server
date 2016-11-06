let index = 1

const setItem = todoItem => {
  const Item = JSON.parse( localStorage.getItem( 'Items' ) )

  if ( Item ) {
    Item.push( todoItem )
    return localStorage.setItem( 'Items', JSON.stringify( Item ) )
  } else {
    const ItemContainer  = []
    ItemContainer.push( todoItem )
    return localStorage.setItem('Items', JSON.stringify( ItemContainer ) )
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

const getItems = () => {
  const Item = JSON.parse( localStorage.getItem( 'Items' ) )

  if ( Item ) {
    for (let index = 0; index < Item.length; index++) {
      const listItem = document.createElement("DIV")
      listItem.setAttribute("id", `displayInputHtml${ index }`)
      document.body.appendChild( listItem )
      const displayInputHtml = document.querySelector( `div#displayInputHtml${ index }` )
      const text = displayInputHtml.innerText = Item[ index ]
    }
  } else {
    const listItem = document.createElement("DIV")
    document.body.appendChild( listItem )
    listItem.setAttribute("id", 'not-found')
    const displayInputHtml = document.querySelector( 'div#not-found' )
    const text = displayInputHtml.innerText = 'No Items are created, Get started'
  }
}

getItems()
