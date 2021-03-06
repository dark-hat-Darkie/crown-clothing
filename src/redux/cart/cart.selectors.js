import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity, 0)
);