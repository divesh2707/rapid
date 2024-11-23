const fs = require('fs');
const path = require('path');
const { convertDocxToPDF } = require('../services/pdfService');

// Function to convert DOCX to PDF
const convertToPDF = async (req, res) => {
  try {
    const { fileName } = req.body;
    const docxPath = path.join(__dirname, '../uploads', fileName);
    const pdfPath = docxPath.replace('.docx', '.pdf');

    // Convert DOCX to PDF
    await convertDocxToPDF(docxPath, pdfPath);

    // Return the path to the converted PDF
    res.status(200).json({
      message: 'File converted successfully',
      pdfPath: `/uploads/${path.basename(pdfPath)}`,
    });
  } catch (error) {
    console.error('Error during file conversion:', error.message);
    res.status(500).json({ message: 'Error converting file' });
  }
};

// Function to get file metadata
const getFileMetadata = (req, res) => {
  try {
    const { fileName } = req.params;
    const filePath = path.join(__dirname, '../uploads', fileName);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found' });
    }

    const stats = fs.statSync(filePath);
    const metadata = {
      size: stats.size, // File size in bytes
      createdAt: stats.birthtime, // File creation date
      updatedAt: stats.mtime, // Last modification date
    };

    res.status(200).json(metadata);
  } catch (error) {
    console.error('Error fetching file metadata:', error.message);
    res.status(500).json({ message: 'Error fetching metadata' });
  }
};

// Export the functions
module.exports = {
  convertToPDF,
  getFileMetadata,
};
