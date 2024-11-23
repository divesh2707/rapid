import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MetadataDisplay({ file }) {
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/metadata', {
          params: { fileName: file.filename },
        });
        setMetadata(response.data.metadata);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };

    if (file) {
      fetchMetadata();
    }
  }, [file]);

  return (
    <div>
      <h3>File Metadata</h3>
      {metadata ? (
        <ul>
          <li><strong>File Name:</strong> {metadata.fileName}</li>
          <li><strong>Size:</strong> {metadata.size} bytes</li>
          <li><strong>Created At:</strong> {new Date(metadata.createdAt).toLocaleString()}</li>
        </ul>
      ) : (
        <p>Loading metadata...</p>
      )}
    </div>
  );
}

export default MetadataDisplay;
