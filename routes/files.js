var express = require('express');

var router = express.Router();
var path = require('path');
var fs = require('fs');
var os = require("os");

/* GET home page. */
router.post('/', function(req, res, next) {
    var hostname = req.get('host')
    readDirectory(hostname, function (files) {
        res.json({files : files});
    })
});

function readDirectory(hostname, callback) {
    var p = path.join(__dirname, '../public/uploads')
    var filelist = [];
    fs.readdir(p, function (err, files) {
        if (err) {
            throw err;
        }

        files.map(function (file) {
            return hostname + "/uploads/" + file
        }).forEach(function (file) {
            filelist.push(file)
        });
        callback(filelist);
    });

}



module.exports = router;
