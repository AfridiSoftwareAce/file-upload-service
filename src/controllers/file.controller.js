const path = require('path');
const fs = require('fs');

exports.uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.status(200).json({ message: 'File uploaded successfully', filename: req.file.filename });
};

exports.downloadFile = (req, res) => {
  const safeFilename = path.basename(req.params.filename); // Prevent path traversal
  const filePath = path.join(__dirname, '../../uploads', safeFilename);

  if (fs.existsSync(filePath)) {
    return res.download(filePath);
  } else {
    return res.status(404).json({ message: 'File not found' });
  }
};

exports.listFiles = (req, res) => {
  const dirPath = path.join(__dirname, '../../uploads');

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Unable to list files' });
    }
    res.status(200).json({ files });
  });
};

