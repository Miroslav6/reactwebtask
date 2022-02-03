// import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from './types';

export const addFavourite = (album) => {
    return {
        type: 'ADD',
        payload: album
    };
};

export const removeFavourite = index => {
    return {
        type: 'FAVOURITE_REMOVED',
        payload: {
            index: index
        }
    };
};