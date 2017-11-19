var mongoose = require('mongoose');
var request = require('request');
var authors = mongoose.model('author');

var apiOptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.authorsList = function(req, res) {
  authors.find()
  .exec(function(err, authorsReturned){
      sendJsonResponse(res, 200, authorsReturned);
  });
};

module.exports.authorsReadOne = function (req, res) { 
     if (req.params && req.params.authorid) {
     authors
      .findById(req.params.authorid)
      .exec(function(err, author) {
        if (!author) {
          sendJsonResponse(res, 404, {
            "message": "authorid not found"
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 404, err);
          return;
        }
          sendJsonResponse(res, 200, author);
        });
        } else {
           sendJsonResponse(res, 404, {
           "message": "No authorid in request"
       });
    }
 };

module.exports.authorsCreate = function (req, res) { 
    authors.create({
      name: req.body.name
    }, function(err, author) {
      if (err) {
        sendJsonResponse(res, 400, err);
      } else {
        sendJsonResponse(res, 201, author);
      }
    })
 };