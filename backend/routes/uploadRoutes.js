const express = require('express');
const upload = require('../middlewares/fileUpload');
const { uploadFile } = require('../controllers/uploadController');

const router = express.Router();

router.post('/', upload.single('file'), uploadFile);

module.exports = router;
