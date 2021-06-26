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
                ...newItem
            },
            quantity: 1
        }
    }

    return freshCartItems;
}
export const removeItemFromCart = (cartItems, newItem) => {

    let existingItem = cartItems[newItem.name]
    let freshCartItems = {...cartItems};
    if (existingItem && existingItem.quantity >= 1) {
        --freshCartItems[newItem.name].quantity

    }

    return freshCartItems;
}

export const clearItemFromCart = (cartItems, newItem) => {

    let freshCartItems = {...cartItems};

    delete freshCartItems[newItem.name];

    return freshCartItems;
}
