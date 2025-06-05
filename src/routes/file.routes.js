const express = require('express');
const router = express.Router();
const multerConfig = require('../config/multer');
const fileController = require('../controllers/file.controller');

// ✅ Define list route first
router.get('/list', fileController.listFiles);

// Then upload
router.post('/upload', multerConfig.single('file'), fileController.uploadFile);

// ✅ Define download route LAST
router.get('/:filename', fileController.downloadFile);

module.exports = router;
