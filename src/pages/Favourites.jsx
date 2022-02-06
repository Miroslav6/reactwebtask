import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Favourites = (props) => {
    const favoriteCards = useSelector(state => state.addFavourite);
   
    console.log('statedata', favoriteCards);

  return (
    <>
    
        
      <div className='container'>
          
      <div className='row stock-container'>
      
              {favoriteCards.map((album, key) => {
                return (
                  <div className='col col-sm-3 mb-5 text-center' key={key}>
                    <div className='products-item h-100 '>
                      <a href={'/albums/' + album.albumId + '-' + album.id} className='p-3 pt-5'>
                        <div>{album.url ? <img loading="lazy" src={album.thumbnailUrl} alt="Album image" /> : ''}</div>
                        <h3 className='pb-2 border-bottom'>AlbumID - {album.albumId}</h3>
                        <h3 className='pb-2 '>{album.title}</h3>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
      </div>
    </>
  )
};

export default Favourites;