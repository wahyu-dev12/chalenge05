const fs = require('fs')

const multer = require('multer')
const multerUpload = require('./multer')

module.exports = fileChecking = (req, res, next) => {
    multerUpload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            res.json({
                msg: "Bad Request",
                status: 400,
                errors: "File size is bigger than 2 MB"
            })
            return
        } else if (err) {
            res.json({
                msg: "Bad Request",
                status: 400,
                errors: err
            })
            return
        }
        next()
    })
}