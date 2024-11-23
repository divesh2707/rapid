const uploadFile = (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded or invalid file type' });
    }
    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
  };
  
  module.exports = { uploadFile };
  