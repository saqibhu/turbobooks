var express = require('express');
var router = express.Router();
var controllerPublishers = require('../controllers/publishers');
var controllerAuthors = require('../controllers/authors');

// publishers
router.post('/publishers', controllerPublishers.publishersCreate);
router.get('/publishers/:publisherid', controllerPublishers.publishersReadOne);
router.get('/publishers', controllerPublishers.publishersList);
router.put('/publishers/:publisherid', controllerPublishers.publishersUpdateOne);
router.delete('/publishers/:publisherid', controllerPublishers.publishersDeleteOne);

// authors
router.post('/authors', controllerAuthors.authorsCreate);
router.get('/authors/:authorid', controllerAuthors.authorsReadOne);
router.get('/authors', controllerAuthors.authorsList);

module.exports = router;