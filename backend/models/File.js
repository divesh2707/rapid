const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  metadata: { type: Object, required: true },
});

module.exports = mongoose.model('File', FileSchema);
