const express = require('express');
const router = express.Router();
const connectDB = require('../connectDB');
const Todos = require('../shemas/todoShema');


router.post( '/newtodo', (req, res) => {
        let newTodo = new Todos({
            title: req.body.title,
            starred: req.body.starred,
            done: req.body.done
        });
        
        try {
            newTodo.save();
            res.json({success: true, msg: "add successful"});
            
        }
        catch (err) {
        res.json({success: false, msg: "not add"});
        }

    
});


module.exports = router;