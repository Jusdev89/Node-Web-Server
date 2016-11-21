const ItemMethods = new function() {
    this.deleted = ( listItem, index, Item ) =>
      listItem.addEventListener( 'dblclick', () => {
        Item.splice( index, 1 )
        localStorage.setItem( 'Items', JSON.stringify( Item ) )
        return listItem.remove()
      })

    this.completed = ( listItem, index, Item ) =>
      listItem.addEventListener( 'click', () => {
        let item = Item[ `${ index ? index : ++index }` ]
        item.completed = true
        Item[ index ] = item
        localStorage.setItem( 'Items', JSON.stringify( Item ) )
        return listItem.className = 'cross-out'
      })

    this.setItem = ( Item, todo ) => {
      if ( Item ) {
        Item.push( todo )
        return localStorage.setItem( 'Items', JSON.stringify( Item ) )
      } else {
        const ItemContainer  = []
        ItemContainer.push( todo )
        return localStorage.setItem('Items', JSON.stringify( ItemContainer ) )
      }
    }

    this.updateItem = ({Item, todoValue, index}) => {
      Item[index] = {
        id: index,
        value: todoValue
      }
      return localStorage.setItem( 'Items', JSON.stringify( Item ) )
    }
    
    return {
      createTodo: ( { Item , index } )  => {
        const { text, listItem } = Display.renderView({ index })
        this.setItem(Item, { id: index, value: text })
        this.completed(listItem, index, Item)
        this.deleted( listItem, index, Item )
        return text
      },
      list: Item => {
        for ( let index = 1; index < Item.length; index++ ) {
          const { listItem } = Display.renderView({
            index,
            todo: Item[index],
            update:  this.updateItem,
            Item
          })
          this.completed( listItem, index, Item )
          this.deleted( listItem, index, Item )
          if ( Item[ `${ index }` ].completed ) {
            listItem.className = "cross-out"
          }
        }
      }
    }
}
