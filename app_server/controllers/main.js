// var express = require('express')
// var router = express.Router();


// Get Home


module.exports.index = function (req, res) {
    res.render('index', {title: 'Express'})
}
