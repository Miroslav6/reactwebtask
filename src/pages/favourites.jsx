import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeFavourite } from '../actions';

const Favourites = (props) => {
  const dispatch = useDispatch();
  const stateFavorites = useSelector(state => state.addFavourite);
  const [favorites, setFavorites] = useState(stateFavorites);
console.log('hookvaror', favorites);
  useEffect(() => {
    // if(favorites) {
    //   setFavorites(favorites);
    // }

  }, [favorites]);

    const onDeleteFavourites = (album) => {
      dispatch(removeFavourite(album));
      // setFavorites([...favorites, album]);

      // const filtered = favorites.filter(album => album.id == 1);
      // favorites.splice(favorites.findIndex(album => album.id == 1),1);
      // console.log('afterdelete', favorites);

      // return favorites;
    //   const filtered = favoriteCards.filter(function(value, index, arr){
    //     return value > 5;
    // });
    };

  return (
    <>


      <div className='container mt-5'>

      <div className='row stock-container'>

              {stateFavorites.map((album, key) => {
                return (
                  <div className='col col-sm-3 mb-5 text-center' key={key}>
                    <a onClick={() => onDeleteFavourites(album)} className='delete-card'>
                    <div className='products-item p-5 h-100 '>
                        <div>{album.url ? <img loading="lazy" src={album.thumbnailUrl} alt="Album image" /> : ''}</div>
                        <h3 className='pb-2 border-bottom'>AlbumID - {album.albumId}-{album.id}</h3>
                        <h3 className='pb-2 '>{album.title}</h3>
                    </div>
                    </a>
                  </div>
                );
              })}
            </div>
      </div>
    </>
  )
};

export default Favourites;