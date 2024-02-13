var express = require("express");
var router = express.Router();
const fs = require("fs");
// const fileType=require('file-type');
const folder = "Files";

router.get("/", function (req, res, next) {
  fs.readdir(`${folder}`, { withFileTypes: true }, function (err, files) {
    res.render("index", { folder, files});
  });
});

// refresh button
router.get("/refresh", function (req, res, next) {
  res.redirect("back");
});

// creating the file in the folder name file
router.get("/newfile", function (req, res, next) {
  fs.writeFile(`${folder}/${req.query.name}`, "", function (err) {
    res.redirect("/");
  });
});

// creating the new folder in the folder name file
router.get("/newFolder", function (req, res, next) {
  fs.mkdir(`${folder}/${req.query.name}`, function (err) {
    res.redirect("/");
  });
});

// page where we read the data in the files folder

router.get("/file/:fileopen", function (req, res, next) {
  fs.readdir(`${folder}`, { withFileTypes: true }, function (err, files) {
    fs.readFile(`./${folder}/${req.params.fileopen}`,"utf-8",function(err,data){
      res.render('filedata',{folder,files,fileopenName:req.params.fileopen,data})
    });
  });
});



//  deleting a file
router.get("/file/delete/:fileopen", function (req, res, next) {
  fs.unlink(`./${folder}/${req.params.fileopen}`, function (err, data) {
  });
});

// deleting a folder or the directory
router.get("/folder/delete/:fileopen", function (req, res, next) {
  fs.rmdir(`./${folder}/${req.params.fileopen}`, function (err, data) {
    res.redirect('back');
  });
});

// renaming file name
router.post("/rename/:fileName", function (req, res, next) {
  fs.rename(`./${folder}/${req.params.fileName}`,`./${folder}/${req.params.fileName}`, function (err){
 });
 res.redirect('index');
});






module.exports = router;
