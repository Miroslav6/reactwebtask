import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ImageGallery from 'react-image-gallery';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../actions';
import api from '../api/posts'

const AlbumPage = (props) => {

  const { albumtId } = useParams();
  console.log('albumtId',albumtId);
  const dispatch = useDispatch();
  const [data, setData] = useState([])
  const album = data.find(({ id }) => id == albumtId);
 debugger
  // const images = album.images;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await api.get('/photos');
        const album1 = response.filter(album => album.albumId == 1);
        const album2 = response.filter(album => album.albumId == 2);
        const album3 = response.filter(album => album.albumId == 3);
        const album4 = response.filter(album => album.albumId == 4);
        const album5 = response.filter(album => album.albumId == 5);
        const albums = ([...album1, ...album2, ...album3, ...album4, ...album5]);
        setData(albums);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
    <div className='row'>
        <div className='col col-sm-6'>
          {/* <ImageGallery items={images} /> */}
        </div>
        <div className='col col-sm-6 entry-content'>


          <div className='col col-sm-3 mb-5 text-center'>
            <div>{album.url ? <img loading="lazy" src={album.thumbnailUrl} alt="Album image" /> : ''}</div>

              <h3 className='pb-2 border-bottom'>AlbumID - {album.albumId}</h3>
              <h3 className='pb-2 '>{album.title}</h3>
            <span onClick={() => dispatch(increment())}><i className="bi bi-heart"></i>Добави в любими</span>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AlbumPage;