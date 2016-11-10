const ItemEvent = {
  setItem: ( Item, todo ) => {
    if ( Item ) {
      Item.push( todo )
      console.log( 'Todo', todo )
      return localStorage.setItem( 'Items', JSON.stringify( Item ) )
    } else {
      const ItemContainer  = []
      ItemContainer.push( todo )
      return localStorage.setItem('Items', JSON.stringify( ItemContainer ) )
    }
  },
  completed: ( listItem, index, Item ) => {
    return listItem.addEventListener( 'click', () => {
      let item = Item[ `${ index ? index : ++index }` ]
      item.completed = true
      Item[ index ] = item
      localStorage.setItem( 'Items', JSON.stringify( Item ) )
      return listItem.className = 'cross-out'
    })
  },
  deleted: ( listItem, index, Item ) => {
    return listItem.addEventListener( 'dblclick', () => {
      Item.splice( index, 1 )
      localStorage.setItem( 'Items', JSON.stringify( Item ) )
      return listItem.remove()
    })
  },
  list: ( { Item, completed, deleted } ) => {
    for ( let index = 0; index < Item.length; index++ ) {
      const divContainer = Display.container()
      const listItem = Display.item( index )
      divContainer.appendChild( listItem )
      const displayInputHtml = document.querySelector( `div#displayInputHtml${ index }` )
      displayInputHtml.innerText = `${ index ? index : ++index }.  ${ Item[ index ].value }`
      completed( listItem, index, Item )
      deleted( listItem, index, Item )
      if ( Item[ `${ index ? index : ++index }` ].completed ) {
        listItem.className = "cross-out"
      }

    }
  },
  createTodo: ( { Item, completed, deleted, setItem ,index } )  => {
    const divContainer = Display.container()
    const listItem = Display.item( index )
    divContainer.appendChild( listItem )
    const text = Display.input( index )

    setItem( Item, { id: index, value: text } )
    completed( listItem, index, Item )
    deleted( listItem, index, Item )
    return text
  }
}
