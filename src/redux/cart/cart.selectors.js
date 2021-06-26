import {createSelector} from "reselect";

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => Object.keys(cartItems).reduce(
        (previousValue, itemKey) => cartItems[itemKey].quantity + previousValue,
        0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => Object.keys(cartItems).reduce(
        (previousValue, itemKey) => (cartItems[itemKey].quantity * cartItems[itemKey].item.price) + previousValue,
        0)
)
