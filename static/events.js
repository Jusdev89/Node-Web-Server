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
  list: model => {
    for ( let index = 0; index < model.Item.length; index++ ) {
      const divContainer = Display.container()
      const listItem = Display.item( model.index )
      divContainer.appendChild( listItem )
      const displayInputHtml = Display.input( model.index )
      model.completed( listItem, model.index, model.Item )
      model.deleted( listItem, model.index, model.Item )
      if ( model.Item[ `${ model.index }` ].completed ) {
        listItem.className = "cross-out"
      }

    }
  },
  createTodo: model => {
    const divContainer = Display.container()
    const listItem = Display.item( model.index )
    divContainer.appendChild( listItem )
    const text = Display.input( model.index )

    model.setItem( model.Item, { id: model.index, value: text } )
    model.completed( listItem, model.index, model.Item )
    model.deleted( listItem, model.index, model.Item )
    return text
  }
}
