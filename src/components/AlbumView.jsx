import React from 'react';

function AlbumView({ album, onClose }) {
  return (
    <div className="album-view">
      <h2>{album.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: album.description }} />
      <div className="album-images">
        {album.images.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`} />
        ))}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default AlbumView;
