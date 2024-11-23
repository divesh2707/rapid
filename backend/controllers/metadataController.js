const fs = require('fs');
const path = require('path');

const getMetadata = (req, res) => {
  const filePath = path.join(__dirname, '../uploads', req.query.fileName);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  // Example metadata extraction
  const stats = fs.statSync(filePath);
  const metadata = {
    fileName: req.query.fileName,
    size: stats.size,
    createdAt: stats.birthtime,
  };

  res.status(200).json({ metadata });
};

module.exports = { getMetadata };
