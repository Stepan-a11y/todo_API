const express = require('express');
const router = express.Router();
const connectDB = require('../connectDB');
const Todos = require('../shemas/todoShema');

router.get('/gettodos', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        Todos.find({}, (err, todos) => {
         if(err) throw err;
         return res.send(todos)
       });
  });

router.put('/updtodo', (req, res) => {
    let todoId = req.body.id;
    let title = req.body.title;
    let starred = req.body.starred;
    let done = req.body.done;
    let editMode = req.body.editMode;

      Todos.updateOne(
          { _id: todoId},
          { $set: { title: title, starred: starred, done: done, editMode: editMode} },
          function(err){
            if(err) 
            res.json({success: false, msg: "not upd"});
          else
            res.json({success: true, msg: "upd successful"});
          })
  });

router.delete('/deltodo/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        Todos.findByIdAndRemove(req.params.id, function(err, todos)
        {
            if(err) 
            res.json({success: false});
            else
              res.json({success: true}); 
        });
  });


  router.get('/sortstar/:field&:starred', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        Todos.find({done: {$eq : req.params.field}, starred: {$eq : req.params.starred}}, (err, todos) => 
        {
          if(err) throw err;
          return res.send(todos) 
        });
  });


  router.get('/sort/:field', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        Todos.find({done: {$eq : req.params.field}}, (err, todos) => 
        {
          if(err) throw err;
          return res.send(todos) 
        });
  });


  
  module.exports = router;