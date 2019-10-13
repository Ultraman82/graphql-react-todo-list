var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var taskType = require('./TaskType');
var taskModel = require('../models/Task');
exports.addTask = {
    type: taskType.taskType,
    /* define the arguments that we should pass to the mutation
       here we require title of the task and 
       the id will be generated automatically 
    */
    args: {
        title: {
            //username: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve: async (root, args) => {
        //under the resolve method we get our arguments

        const uModel = new taskModel(args);// creating a new model
        const newTask = await uModel.save();// mongoose save
        if (!newTask) {
            throw new Error('error');
        }
        return newTask
    }
}