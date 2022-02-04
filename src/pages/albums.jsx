import { React, useState, useEffect } from 'react';
import { productData } from "../db-products";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux'
import { addFavourite } from '../actions';
import api from '../api/posts'
import { array } from 'yargs';

const Albums = () => {
  const [width, setWidth] = useState('Ширина');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
      setLoading(false);
    }

    fetchData();
  }, []);
  
  let allUniqueWidths = [...new Set(productData.map((data) => data.sizewidth).sort()), 'Ширина'];

  const handleFilterChange = (e, filterType) => {
    switch (filterType) {
      case "width":
        setWidth(e.target.value)
        break;
    }
  };

  const handleChangeWidth = (event) => {
    handleFilterChange(event, 'width')
  };

  const onBtnFavourites = (album) => {
    setFavorites([...favorites, album])
    dispatch(addFavourite(favorites));
  };


  return (
    <div className='container mt-5'>
      <div>
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            <div className='row'>
              <div className='col col-sm-3 mb-5 stock-item'>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="width-select-label">Ширина</InputLabel>
                    <Select
                      labelId="width-select-label"
                      id="width-select"
                      value={width}
                      label="Ширина"
                      onChange={handleChangeWidth}
                    >
                      {allUniqueWidths?.map(data => {
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
            </div>
            <div className='separator' />
            <div className='row stock-container'>
              {data.map((album, key) => {
                return (
                  <div className='col col-sm-3 mb-5 text-center' key={key}>
                    <div className='products-item h-100 '>
                      <a href={'/albums/' + album.albumId + '-' + album.id} className='p-3 pt-5'>
                        <div>{album.url ? <img loading="lazy" src={album.thumbnailUrl} alt="Album image" /> : ''}</div>
                        <h3 className='pb-2 border-bottom'>AlbumID - {album.albumId}</h3>
                        <h3 className='pb-2 '>{album.title}</h3>
                      </a>
                      <span onClick={() => onBtnFavourites(album)}><i className="bi bi-heart fa-sm"></i>Add to Favourites</span>
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