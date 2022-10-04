const multer = require('multer')
const path = require('path')

const publicDirectory = path.join(__dirname, "../public")
const uploadDirectory = path.join(publicDirectory, "uploads")

const maxSize = 1024 * 1024 * 2

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirectory)
    },

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb("Format file must be PNG, JPG, or JPEG", false);
        }
    },

    limits: { fileSize: maxSize }

// 'image' diambil dari attribute name pada form input
}).single('image')

module.exports = upload