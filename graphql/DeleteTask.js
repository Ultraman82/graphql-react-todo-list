var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var taskType = require('./TaskType');
var taskModel = require('../models/Task');
exports.removeTask = {
    type: taskType.taskType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (root, args) => {
        const removedTask = await taskModel.findByIdAndRemove(args.id)
        if (!removedTask) {
            throw new Error('error')
        }
        return removedTask;
    }
}