import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addFavourite } from '../actions';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import api from '../api/posts'

const Albums = () => {
  const dispatch = useDispatch();
  const stateFavorites = useSelector(state => state.addFavourite);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState(stateFavorites);
  const [albumid, setAlbumId] = useState('Select Album');
  const albumIds = [
    1,
    2,
    3,
    4,
    5,
    'All Albums'
  ];

  useEffect(() => {
    if (favorites) {
      setFavorites(favorites);
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await api.get('/photos');
        const album1 = response.filter(album => album.albumId === 1);
        const album2 = response.filter(album => album.albumId === 2);
        const album3 = response.filter(album => album.albumId === 3);
        const album4 = response.filter(album => album.albumId === 4);
        const album5 = response.filter(album => album.albumId === 5);
        const albums = ([...album1, ...album2, ...album3, ...album4, ...album5]);
        
        if(albumid === 1) {
          setData(album1);
        }
        else if(albumid === 2) {
          setData(album2);
        }
        else if(albumid === 3) {
          setData(album3);
        }
        else if(albumid === 4) {
          setData(album4);
        }
        else if(albumid === 5) {
          setData(album5);
        }
        else{
          setData(albums);
        }
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
    dispatch(addFavourite(favorites));
  }, [albumid, favorites]);

  const onBtnFavourites = (album) => {
    setFavorites([...favorites, album]);
  };

  const handleSelectAlbumId = (e) => {
    setAlbumId(e.target.value);
  };

  return (
    <div className='container mt-5'>
      <div>
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            <div className='col col-sm-3 mb-5 stock-item'>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="select-label">Select Album</InputLabel>
                  <Select
                    labelId="select-label"
                    id="height-select"
                    value={albumid}
                    label="Select Album"
                    onChange={handleSelectAlbumId}
                  >
                    {albumIds?.map(data => {
                      return (
                        <MenuItem key={data} value={data}>
                          {data}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className='row stock-container'>
              {data.map((album, key) => {
                return (
                  <div className='col col-sm-12 col-md-6 col-lg-3  mb-5 text-center' key={key}>
                    <div className='products-item p-5 h-100 '>
                      <a href={'/albums/' + album.albumId + '-' + album.id} className='d-block'>
                        <div>{album.url ? <img loading="lazy" src={album.thumbnailUrl} alt="Album" /> : ''}</div>
                        <h3 className='pb-2 border-bottom'>AlbumID - {album.albumId}</h3>
                        <h3 className='pb-2 '>{album.title}</h3>
                      </a>
                      <button onClick={() => onBtnFavourites(album)} className='btn btn-primary'>Add card</button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}
      </div>


    </div>
  )
}

export default Albums;