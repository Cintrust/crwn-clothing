import ShopActionTypes from "./shop.types";

export const updateCollections = (collection) => {
    return {
        type: ShopActionTypes.UPDATE_COLLECTION,
        payload: collection
    }
}
