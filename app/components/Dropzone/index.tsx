'use client';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadImage from '@/app/components/animations/UploadImage';

export default function Dropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col justify-center items-center" {...getRootProps()}>
      <input {...getInputProps()} />
      <UploadImage />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  );
}
