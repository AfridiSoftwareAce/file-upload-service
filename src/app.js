const express = require('express');
const fileRoutes = require('./routes/file.routes');
const app = express();
const multer = require('multer'); 

app.use(express.json());

app.use('/files', express.static('uploads')); // Static download

app.use('/', fileRoutes); 
// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: err.message });
  }
  res.status(500).json({ message: err.message || 'Internal Server Error' });
});


module.exports = app;
