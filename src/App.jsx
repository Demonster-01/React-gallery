import React, { useState, useEffect } from 'react';
import AlbumForm from './components/AlbumForm';
import AlbumList from './components/AlbumList';


import './App.css';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const storedAlbums = JSON.parse(localStorage.getItem('albums'));
    if (storedAlbums) {
      setAlbums(storedAlbums);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('albums', JSON.stringify(albums));
  }, [albums]);

  const addAlbum = (album) => {
    setAlbums([...albums, album]);
  };

  return (
    <div className="App">
      <div className="AlbumContainer">
        <h1>Image Album</h1><hr />
        <div>
          <div className='FormBox'>
            <AlbumForm addAlbum={addAlbum} />
          </div>
          <div className='AlbumBox'>
            <AlbumList albums={albums} />
          </div>
        </div>
      </div>
      
    {/* <Dropzone/> */}
    </div >


  );
}

export default App;
