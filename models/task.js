const mongoose = require('mongoose');

// Create Schema for tasks

const taskSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    due_date:{
        type: Date,
        required: true
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;