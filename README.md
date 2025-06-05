# 📂 File Upload Service – Node.js 

This project is a **secure file upload service** built with **Node.js**, **Express**, and **Multer**.

---

## 📌 Features

- ✅ Upload images or PDFs via `POST /upload`
- ✅ Download files via `GET /:filename`
- ✅ List uploaded files via `GET /list`
- ✅ File type & size validation (only images/PDFs under 5MB)
- ✅ Basic security against path traversal
- ✅ Clean folder structure & best practices followed

---

## 📁 Folder Structure

file-upload-service/
├── uploads/ # Stores uploaded files
├── src/
│ ├── config/ # Multer config
│ ├── controllers/ # Request logic
│ ├── routes/ # Express routes
│ ├── utils/ # Future utils
│ ├── app.js # Express app
│ └── server.js # Server entry
├── .env # Port config
├── .gitignore
├── package.json
└── README.md

---

## 🚀 How to Run

```bash
git clone https://github.com/YOUR_USERNAME/file-upload-service-nodejs.git
cd file-upload-service
npm install
npm run dev
Make sure uploads/ folder exists, or create it manually.

📬 API Endpoints
Method	Endpoint	Description
POST	/upload	Upload image or PDF
GET	/list	List all uploaded files
GET	/:filename	Download specific file

🧪 Validations
Only .png, .jpg, .jpeg, .pdf

Max file size: 5 MB

Invalid types return: Only images and PDFs are allowed

🔐 Security
Sanitized filenames

path.basename prevents traversal (../../)

.env and /uploads excluded via .gitignore

🙌 Author
Afridi Wara
Node.js Backend Developer
📧 afridiwara.dev@gmail.com
📞 +91 82406 28900