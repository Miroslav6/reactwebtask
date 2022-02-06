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