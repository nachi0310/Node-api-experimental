var express = require('express');
var router = express.Router(); //allows routes to brak into modules
var db = require("../models");
var helpers = require("../helpers/information");

router.route('/')
  .get(helpers.getInformation)
  .post(helpers.createInformation)

router.route('/:todoId')
  .get(helpers.getInfo)
  .put(helpers.updateInformation)
  .delete(helpers.deleteInformation)

module.exports = router;