const multer = require('multer');
const path = require('path');

// Disk Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
filename: (req, file, cb) => {
  const timestamp = Date.now();
  const cleanName = file.originalname.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9.-]/g, '');
  cb(null, `${timestamp}-${cleanName}`);
}
});

// Validate file type
const fileFilter = (req, file, cb) => {
const allowedTypes = ['.png', '.jpg', '.jpeg', '.pdf'];
const mimeTypes = ['image/png', 'image/jpeg', 'application/pdf'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.includes(ext) && mimeTypes.includes(file.mimetype)) {
  cb(null, true);
} else {
  cb(new Error('Only images and PDFs are allowed'));
}
};

module.exports = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter,
});
