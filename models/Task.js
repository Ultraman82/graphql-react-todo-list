var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TaskSchema = new Schema({
    title: {
        // title: {

        type: String,
        required: true
    }
});

const task = mongoose.model('task', TaskSchema);
module.exports = task