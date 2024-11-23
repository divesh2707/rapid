import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

function ConvertButton({ file }) {
  const [pdfUrl, setPdfUrl] = useState('');
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleConvert = async () => {
    setLoading(true);
    setError('');

    try {
      // Request to convert the file to PDF
      const response = await axios.post('http://localhost:5000/api/convert', {
        fileName: file.filename,
      });

      const pdfPath = response.data.pdfPath; // Path to the converted PDF file
      setPdfUrl(pdfPath);

      // Fetch metadata for the converted PDF
      const metadataResponse = await axios.get(
        `http://localhost:5000/api/convert/metadata/${file.filename.replace('.docx', '.pdf')}`
      );
      setMetadata(metadataResponse.data);

      setLoading(false);
    } catch (err) {
      setError('Error during file conversion');
      setLoading(false);
    }
  };

  const handleDownload = () => {
    // Trigger the download using FileSaver.js
    const fileUrl = `http://localhost:5000/uploads/${pdfUrl.split('/').pop()}`;
    saveAs(fileUrl, `${pdfUrl.split('/').pop()}`);
  };

  return (
    <div>
      <button onClick={handleConvert} disabled={loading}>
        {loading ? 'Converting...' : 'Convert to PDF'}
      </button>

      {error && <p>{error}</p>}

      {/* If the PDF is available, show the download option */}
      {pdfUrl && (
        <div>
          <h3>Converted PDF Available</h3>
          <button onClick={handleDownload}>Download PDF</button>
        </div>
      )}

      {/* Show metadata if available */}
      {metadata && (
        <div>
          <h3>File Metadata</h3>
          <ul>
            <li>Size: {metadata.size} bytes</li>
            <li>Created At: {new Date(metadata.createdAt).toLocaleString()}</li>
            <li>Last Modified: {new Date(metadata.updatedAt).toLocaleString()}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ConvertButton;
