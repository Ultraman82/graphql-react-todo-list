var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var taskType = require('./TaskType');
var taskModel = require('../models/Task');
exports.updateTask = {
    type: taskType.taskType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve: async (root, args) => {
        const UpdatedTask = await taskModel.findByIdAndUpdate(args.id, args);
        if (!UpdatedTask) {
            throw new Error('Error')
        }
        return UpdatedTask;
    }
}