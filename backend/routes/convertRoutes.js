const express = require('express');
const { convertToPDF, getFileMetadata } = require('../controllers/convertController');

const router = express.Router();

// Endpoint to convert DOCX to PDF
router.post('/', convertToPDF);

// Endpoint to get file metadata
router.get('/metadata/:fileName', getFileMetadata);

module.exports = router;
