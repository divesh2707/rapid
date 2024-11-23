const express = require('express');
const { getMetadata } = require('../controllers/metadataController');

const router = express.Router();

router.get('/', getMetadata);

module.exports = router;
