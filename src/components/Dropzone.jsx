// ref: hamed bahram


// import './App.css';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function Dropzone({ className, onFilesAdded }) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      const newFiles = acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }));
      setFiles(prevFiles => [...prevFiles, ...newFiles]);
      onFilesAdded(newFiles);
    }
  }, [onFilesAdded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 1024 * 1000,
  });

  const removeFile = (name) => {
    setFiles(files => files.filter(file => file.name !== name));
  };

  return (
    <div className='Dropbox' {...getRootProps({ className })}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here ...<br></br></p> : <p>Drag 'n' drop some files here, or click to select files</p>}
    </div>
  );
}

export default Dropzone;
