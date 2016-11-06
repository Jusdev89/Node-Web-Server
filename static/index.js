let Item = JSON.parse( localStorage.getItem( 'Items' ) )
let index = Item ? Item.length : 1
const e = ItemEvent

const displayInput = () =>
  e.createTodo( Item, e.completed, e.deleted, e.setItem )

const getItems = () => {
  if ( Item ) {
    e.list( Item, e.completed, e.deleted )
  } else {
    Message.noItems()
  }
}

getItems()
