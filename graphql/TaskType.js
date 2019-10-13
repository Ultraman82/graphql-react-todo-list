var GraphQLObjectType = require('graphql').GraphQLObjectType
var GraphQLNonNull = require('graphql').GraphQLNonNull
var GraphQLID = require('graphql').GraphQLID
var GraphQLString = require('graphql').GraphQLString

exports.taskType = new GraphQLObjectType({
    name: 'task',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            title: { type: GraphQLString }
        }
    }
})