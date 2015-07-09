var express = require('express');
var models = require("../models");
var router = express.Router();

/* GET todo data */
router.get('/', function(req, res, next) {
  models.Todo.findAll().then(function(todos) {
    res.json(todos);
  });
});

/* POST (save) todo data */
router.post('/', function(req, res, next) {
  models.Todo.create({
    text: req.body.text,
    done: req.body.done
  }).then(function(todos){
    res.json(todos.dataValues);
  }).catch(function(error){
    console.log("ops: " + error);
    res.status(500).json({ error: 'error' });
  });
});

module.exports = router;
