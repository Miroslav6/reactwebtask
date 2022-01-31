import React, { useState, useEffect } from 'react';

const Home = (props) => {
  return (
    <>
      <div className='container'>
        <ol>
          <li>Да се двигне ReactJS проект с Redux и Redux-Persist към него</li>
          <li>Да се вземе фийда от това URL: https://jsonplaceholder.typicode.com/photos</li>
          <li>Да се визуализира селектор на албум (1, 2, 3, 4, 5) - импровизирай с визуализацията</li>
          <li>При избор на албум да се визуализират "картички" с картинката от всеки елемент на JSON-a и тайтъл на картинката под нея (отново импровизирай както искаш с визията)</li>
          <li>Да има опция за Favourites на картинките - потребителят да може да маркира картинки като favorites. Тази информация да се пази в Redux State-a. Favorites да е като албум, в който се виждат всички добавени картинки</li>
          <li>След рестарт на страницата стейта трябва да се възстанови и отново да се виждат зпазените картинки в Favorites</li>
        </ol>
      </div>
    </>
  )
};

export default Home;