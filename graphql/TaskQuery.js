var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
//import task model 
var TaskModel = require('../models/Task');
//import GraphQL TaskType
var taskType = require('./TaskType').taskType;
// Query
exports.TaskQuery = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            tasks: {
                type: new GraphQLList(taskType),
                resolve: async () => {
                    const tasks = await TaskModel.find()
                    if (!tasks) {
                        throw new Error('error while fetching data')
                    }
                    return tasks
                }
            }
        }
    }
})