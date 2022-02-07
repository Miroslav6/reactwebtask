export const addFavourite = (album) => {
    return {
        type: 'ADD',
        payload: album
    };
};

export const removeFavourite = (album) => {
    return {
        type: 'DELETE',
        payload: album
    };
};