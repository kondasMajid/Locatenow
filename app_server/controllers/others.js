// var express = require('express')
// var router = express.Router();


// Get About page


module.exports.about = function (req, res) {
    res.render('index', {title: 'About us'})
}

// ng config -g cli.warnings.versionMismatch false