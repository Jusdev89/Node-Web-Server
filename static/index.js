let Item = JSON.parse( localStorage.getItem( 'Items' ) )
let index = Item ? Item.length : 0

const displayInput = () =>
  ItemMethods.createTodo({ Item, index: ++index })

const getItems = () => {
  if (Item) {
    ItemMethods.list(Item)
  } else {
    Message.noItems()
  }
}

getItems()
