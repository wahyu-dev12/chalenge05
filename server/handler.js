const { Cars } = require('../models')

const fs = require('fs')

const showIndexLayout = (req, res) => {
    Cars.findAll().then(cars => {
        // 'index' diambil dari nama file didalam directory views
        res.render('index', {
            msg: "success get all data",
            status: 200,
            cars
        })
    })
}

const showCreateLayout = (req, res) => {
    // 'create' diambil dari nama file didalam directory views
    res.render('create')
}

const showUpdateLayout = (req, res) => {
    Cars.findOne({
        where: { id: req.params.id }
    }).then(cars => {
        // 'update' diambil dari nama file didalam directory views
        res.status(200).render('update', {
            status: 200,
            cars
        })
    })
}

const processCreating = (req, res) => {
    try {
        const url = `/uploads/${req.file.filename}`
        Cars.create({
            name: req.body.name,
            price: req.body.price,
            size: req.body.size,
            image: url
        }).then(() => {
            res.status(201).redirect('/')
        })
    } catch (err) {
        res.json({
            msg: "Bad Request",
            status: 400,
            errors: "Image cannot empty"
        })
        return
    }
}

const processUpdating = (req, res) => {
    try {
        // id & oldImage diambil dari form input dengan type=hidden
        const url = `/uploads/${req.file.filename}`

        // jika ada image baru maka image lama dihapus
        fs.unlink('public' + req.body.oldImage, (err) => {
            if (err) {
                console.log({ msg: err })
            }
            console.log('File has been deleted')
        })
        Cars.update({
            name: req.body.name,
            price: req.body.price,
            size: req.body.size,
            image: url
        }, { where: { id: req.body.id } }).then(() => {
            res.status(201).redirect('/')
        })
    } catch (undef) {
        Cars.update({
            name: req.body.name,
            price: req.body.price,
            size: req.body.size
        }, { where: { id: req.body.id } }).then(() => {
            res.status(201).redirect('/')
        })
    }
}

const processDeleting = (req, res) => {
    // id & image diambil dari form input dengan type=hidden
    Cars.destroy({ where: { id: req.body.id } }).then(() => {
        fs.unlink('public' + req.body.image, (err) => {
            if (err) {
                console.log({ msg: err })
            }
            console.log('File has been deleted')
        })
        res.redirect('/')
    }).catch(err => {
        res.status(422).json({
            msg: "Cant delete article",
            err: err.message
        })
    })
}

module.exports = {
    showIndexLayout,
    showCreateLayout,
    showUpdateLayout,
    processCreating,
    processUpdating,
    processDeleting,
}