import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeFavourite } from '../actions';

const Favourites = () => {
  const dispatch = useDispatch();
  const stateFavorites = useSelector(state => state.addFavourite);

  const onDeleteFavourites = (album) => {
    dispatch(removeFavourite(album));
  };

  return (
    <>
      <div className='container mt-5'>
        <div className='row stock-container'>
        {stateFavorites.length ? 
          <div className='col-12'>
            <h1>Favourites</h1>
          </div>
          : ''
          }
          {stateFavorites.length ? stateFavorites.map((album, key) => {
            return (
              <div className='col col-sm-12 col-md-6 col-lg-3 mb-5 text-center' key={key}>

                <div className='products-item p-5 h-100 '>
                  <div>{album.url ? <img loading="lazy" src={album.thumbnailUrl} alt="Album" /> : ''}</div>
                  <h3 className='pb-2 border-bottom'>AlbumID - {album.albumId}-{album.id}</h3>
                  <h3 className='pb-2 '>{album.title}</h3>
                  <button onClick={() => onDeleteFavourites(album)} className='btn btn-primary'>Remove card</button>
                </div>

              </div>
            );
          }) : <p className='col col-sm-12 display-4 text-center'><i className="bi bi-heart fa-sm"></i> No Favourites</p>}

        </div>
      </div>
    </>
  )
};

export default Favourites;