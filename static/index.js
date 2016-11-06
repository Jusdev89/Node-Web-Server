let Item = JSON.parse( localStorage.getItem( 'Items' ) )
let index = Item ? Item.length : 0

const displayInput = () =>
  ItemEvent.createTodo({
    Item,
    completed: ItemEvent.completed,
    deleted: ItemEvent.deleted,
    setItem: ItemEvent.setItem,
    index: ++index
  })

const getItems = () => {
  if ( Item ) {
    ItemEvent.list({
      Item,
      completed: ItemEvent.completed,
      deleted: ItemEvent.deleted,
      index: index
    })
  } else {
    Message.noItems()
  }
}

getItems()
