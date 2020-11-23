import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart], 
    (firstElement) => firstElement.cartItems
    );

export const selectCartHidden = createSelector(
    [selectCart],
    (firstElement) => firstElement.hidden
    );

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    (firstElement) => firstElement.reduce((accumulator, currentElement) => accumulator + currentElement.quantity,0)
    );

export const selectCartTotal = createSelector(
    [selectCartItems],
    (firstElement) => firstElement.reduce((accumulator, currentElement) => accumulator + (currentElement.quantity*currentElement.price), 0)
);