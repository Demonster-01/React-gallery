import React, { useState, useCallback } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import Dropzone from './Dropzone';
import {useDropzone} from 'react-dropzone'

function AlbumForm({ addAlbum }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setImages([...images, ...acceptedFiles]);
  }, [images]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });


  // const handleImageUpload = (event) => {
  //   const files = Array.from(event.target.files);
  //   setImages([...images, ...files]);
  // };

  const handleImageUpload = (acceptedFiles) => {
    setImages((prevImages) => [...prevImages, ...acceptedFiles]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description && images.length > 0) {
      const newAlbum = { title, description, images };
      addAlbum(newAlbum);
      setTitle('');
      setDescription('');
      setImages([]);
    } else {
      alert('Please fill in all fields and upload images.');
    }
  };

  return (
    <>
      <div className='Container'>
        <form onSubmit={handleSubmit}>
          <h2><u>Add photo</u></h2>

          <div className="mb-3">
            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Image Title' />
          </div>

          {/* <div className="mb-3">
            <label>Images:</label>
            <input type="file" multiple onChange={handleImageUpload} />
          </div> */}

          
    <Dropzone onFilesAdded={handleImageUpload}/>

          


          <div className="mb-3" style={{ width: '400px' }}>
            <CKEditor className="CKEditor"
              editor={ClassicEditor}
              data={description}
              config={{
                placeholder: 'Enter your description here...'
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
            />
          </div>
          
          <button className="btn btn-success" type="submit">Create Album</button>
        </form>
      </div>
    </>
  );
}

export default AlbumForm;
