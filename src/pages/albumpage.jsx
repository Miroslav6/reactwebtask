import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addFavourite } from '../actions';
import api from '../api/posts'

const AlbumPage = (props) => {

  const { albumParamId } = useParams();
  const { paramId } = useParams();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [currentItem] = data.filter(al => al.id == paramId);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await api.get('/photos');
        const album = response.filter(al => al.albumId == albumParamId);
        setData(album);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className='container'>
        {loading && <div>Loading</div>}
      </div>
      {!loading && (
        <div className="container mt-5">
          <div className='row'>
            <div className='col col-sm-6'>
              <div>{currentItem.url ? <img loading="lazy" src={currentItem.url} alt="Album image" /> : ''}</div>
            </div>
            <div className='col col-sm-6 entry-content'>
              <h3 className='pb-2 border-bottom'>AlbumID  {currentItem.albumId}-{currentItem.id}</h3>
              <h3 className='pb-2 '>{currentItem.title}</h3>
              <span onClick={() => dispatch(addFavourite())}><i className="bi bi-heart"></i>Add to Favourites</span>
            </div>
          </div>
        </div>
      )}
    </>

  );
};

export default AlbumPage;