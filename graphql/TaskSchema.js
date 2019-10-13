var GraphQLSchema = require('graphql').GraphQLSchema
var GraphQLObjectType = require('graphql').GraphQLObjectType
var query = require('./TaskQuery').TaskQuery
var mutation = require('./TaskMutations')

exports.TaskSchema = new GraphQLSchema({
    query: query,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
})