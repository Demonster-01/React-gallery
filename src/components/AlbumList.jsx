// AlbumList.js

import React, { useState } from 'react';
import AlbumView from './AlbumView';

function AlbumList({ albums }) {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleThumbnailClick = (album) => {
    setSelectedAlbum(album);
  };

  return (
    <div>
      <h2><u>Albums collection</u></h2>
      <div className="album-container"> {/* Wrap .album-grid with a container */}
        <div className="album-grid">
          {albums.map((album, index) => (
            <div key={index} className="album-thumbnail">
              <h3>{album.title}</h3>
              {album.images.map((image, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(image)}
                  alt={`Thumbnail ${i}`}
                  onClick={() => handleThumbnailClick(album)}
                  className="thumbnail"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {selectedAlbum && (
        <AlbumView album={selectedAlbum} onClose={() => setSelectedAlbum(null)} />
      )}
    </div>
  );
}

export default AlbumList;
