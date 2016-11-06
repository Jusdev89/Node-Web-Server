let itemsCount = JSON.parse( localStorage.getItem( 'Items' ) )
let index = itemsCount ? itemsCount.length : 1

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

  setItem( { value: input.value } )
  ++index
  return text
}

const getItems = () => {
  const Item = JSON.parse( localStorage.getItem( 'Items' ) )

  if ( Item ) {
    for (let index = 0; index < Item.length; index++) {
      const listItem = document.createElement("DIV")
      if ( Item[ `${ index ? index : ++index }` ].completed ) {
        listItem.className = "cross-out"
      }
      listItem.setAttribute("id", `displayInputHtml${ index }`)

      listItem.addEventListener("click", () => {
        let item = Item[ `${ index ? index : ++index }` ]
        item.completed = true
        Item[ index ] = item
        localStorage.setItem( 'Items', JSON.stringify( Item ) )
        return listItem.className = "cross-out"
      })

      document.body.appendChild( listItem )
      const displayInputHtml = document.querySelector( `div#displayInputHtml${ index }` )

      listItem.ondblclick = () => {
        displayInputHtml.remove() 
        Item.splice( index, 1 )
        localStorage.setItem( 'Items', JSON.stringify( Item ) )
      }

      displayInputHtml.innerText = `${ index ? index : ++index }.  ${ Item[ index ].value }`

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
