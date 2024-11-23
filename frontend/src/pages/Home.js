import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import MetadataDisplay from '../components/MetadataDisplay';
import ConvertButton from '../components/ConvertButton';

function Home() {
  const [fileMetadata, setFileMetadata] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Docx to PDF Converter</h1>
      <FileUpload setUploadedFile={setUploadedFile} />
      {uploadedFile && (
        <>
          <MetadataDisplay file={uploadedFile} setFileMetadata={setFileMetadata} />
          <ConvertButton file={uploadedFile} />
        </>
      )}
    </div>
  );
}

export default Home;
