const path = require('path');

const allowedExtensions = ['.png', '.jpg', '.jpeg', '.pdf'];
const allowedMimeTypes = ['image/png', 'image/jpeg', 'application/pdf'];

exports.isValidFile = (file) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const mime = file.mimetype;

  return allowedExtensions.includes(ext) && allowedMimeTypes.includes(mime);
};
