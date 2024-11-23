import React from 'react';
import axios from 'axios';

function FileUpload({ setUploadedFile }) {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://localhost:5000/api/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('File uploaded successfully!');
        setUploadedFile(response.data.file);
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('File upload failed!');
      }
    }
  };

  return (
    <div>
      <h3>Upload a .docx File</h3>
      <input type="file" accept=".docx" onChange={handleFileUpload} />
    </div>
  );
}

export default FileUpload;
