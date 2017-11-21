var mongoose = require('mongoose');
var request = require('request');
var publishers = mongoose.model('publisher');

var apiOptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}

let response = {
  status: 0,
  data: [],
  message: null
};

let sendJsonResponse = function(res, status, content, message) {
    //res.status(status);
    //res.json(content);
    response.data = content;
    response.status = status;
    response.message = message;

    res.json(response);
};

module.exports.publishersCreate = function (req, res) { 
    publishers.create({
      name: req.body.name
    }, function(err, publisher) {
      if (err) {
        sendJsonResponse(res, 400, err);
      } else {
        sendJsonResponse(res, 201, publisher);
      }
    })
 };
module.exports.publishersReadOne = function (req, res) { 
     if (req.params && req.params.publisherid) {
     publishers
      .findById(req.params.publisherid)
      .exec(function(err, publisher) {
        if (!publisher) {
          sendJsonResponse(res, 404, {
            "message": "publisherid not found"
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 404, err);
          return;
        }
          sendJsonResponse(res, 200, publisher);
        });
        } else {
           sendJsonResponse(res, 404, {
           "message": "No publisherid in request"
       });
    }
 };

module.exports.publishersList = function(req, res) {
  publishers.find()
  .exec(function(err, publishersReturned){
    if (err) {
      sendJsonResponse(res, 404, err, 'Turbobooks API - An error occurred in publishersList');
    } else {
      sendJsonResponse(res, 200, publishersReturned, null);
    }
  });
};

module.exports.publishersUpdateOne = function (req, res) { 
  if (!req.params.publisherid) {
    sendJsonResponse(res, 404, {"message": "Not found, publisherid is required"});
    return;
  }
  publishers
  .findById(req.params.publisherid)
  //.select('-authors')
  .exec(
    function(err, publisher) {
      if (!publisher) {
        console.log('No publisher ')
        sendJsonResponse(res, 404, {"message": "publisherid not found"});
        return;
      } else if (err) {
        console.log('Error is ' + err)
        sendJsonResponse(res, 400, err);
        return;
      }
      publisher.name = req.body.name;
      //publisher.address = req.body.address;
      publisher.save(function(err, publisher) {
        if (err) {
          sendJsonResponse(res, 404, err);
        } else {
          sendJsonResponse(res, 200, publisher);
        }
      });
    });
  };

module.exports.publishersDeleteOne = function (req, res) { 
  var publisherid = req.params.publisherid;
  if (publisherid) {
    publishers
    .findByIdAndRemove(publisherid)
    .exec(
      function(err, publisher) {
        if (err) {
          sendJsonResponse(res, 404, err);
          return;
        }
        sendJsonResponse(res, 204, null);
      }
      );
    } else {
      sendJsonResponse(res, 404, {"message": "No publisherid"});
    }
 };