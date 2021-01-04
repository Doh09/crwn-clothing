import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
[selectShop],
shop => shop.collections
);

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key]) //Vi laver et objekt om til et array ved at bruge Object.keys. 
    //Så bruger vi den enkelte nøgle i map til at returnere alle objekterne i collections.
    //Tænker at shop.collections så må være et objekt?
    );

export const selectShopCollection = memoize(collectionUrlParam => createSelector(
        [selectShopCollections],
        collections => collections[collectionUrlParam]
    ));