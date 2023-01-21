const express = require('express');
const app = express();
const Task = require("../models/task");
app.use(express.urlencoded());

module.exports.home = function(req, res){
    res.render('home', {
        title: 'To Do List'
    });
}

module.exports.addtask = function(req, res){
    Task.create({
        description: req.body.desc,
        category: req.body.categories,
        due_date: req.body.date
    }, function(err, newContact){
        if(err){
            console.log(`Error in creating Task: ${err}`);
            return;
        }
        console.log(`Created: ${newContact}`);
        return res.redirect('back');
    })
} 