export const addItemToCart = (cartItems, newItem) => {

    let existingItem = cartItems[newItem.name]
    let freshCartItems = {...cartItems};
    if (existingItem) {
        ++freshCartItems[newItem.name].quantity
        // freshCartItems[newItem.id] = {
        //     item: {
        //         ...existingItem.item
        //     },
        //     quantity: ++existingItem.quantity
        // }

        // return {
        //     ...cartItems,
        //     [newItem.id]: {
        //         item: {
        //             ...existingItem.item
        //         },
        //         quantity: ++existingItem.quantity
        //     }
        // }
    } else {
        freshCartItems[newItem.name] = {
            item: {
                ...newItem.item
            },
            quantity: 1
        }
    }

    return freshCartItems;
}
