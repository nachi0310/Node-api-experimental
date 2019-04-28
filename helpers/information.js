 var db = require('../models');

 exports.getInformation = function(req, res) {
	db.Info.find()
	.then(function(info) {
	  res.json(info);
	})
	.catch(function(err) {
	  res.send(err);
	})
}

exports.createInformation = function(req, res){
	db.Info.create(req.body)
	.then(function(newInfo) {
        res.json(newInfo);
	})
	.catch(function(err) {
        res.send(err);
	}) 
}

exports.getInfo = function(req, res) {
	db.Info.findById(req.params.InfoId)
	.then(function(foundInfo) {
	  res.json(foundInfo)
	})
	.catch(function(err) {
        res.send(err);
	})
}

//generally findoneandupdate responds with the old data which got replaced
//to send new data as a response add new param and set it as true
exports.updateInformation = function(req, res) {
	db.Info.findOneAndUpdate({_id: req.params.infoId}, req.body, {new : true})
	.then(function(info) {
	  res.json(info);
	})
	.catch(function(err) {
        res.send(err);
	})
}

exports.deleteInformation = function(req, res) {
	db.Info.remove({_id: req.params.todoId})
	.then(function() {
		res.json({message:"we deleted it"})
	})
	.catch(function(err) {
		res.send(err);
	})
}

module.exports = exports;