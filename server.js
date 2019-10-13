

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const mongoose = require('mongoose')
// import graphql-express and TaskSchema
const graphqlExpress = require("express-graphql");
const taskSchema = require('./graphql/TaskSchema').TaskSchema;

//mongodb+srv://bauhause:bau0099@cluster0-79kmu.mongodb.net/test?retryWrites=true&w=majority

mongoose.connect("mongodb://bautest:bau0099@ds233288.mlab.com:33288/graphql", { useUnifiedTopology: true, useNewUrlParser: true }
//mongoose.connect("mongodb+srv://bauhause:bau0099@cluster0-79kmu.mongodb.net/test?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }
    , (err) => {
        if (err) throw err;
        console.log("connected to mongo atlas")
    })



app.set('port', (process.env.PORT || 5000))
//add the schema to graphql-express 
app.use('/graphql', graphqlExpress({
    schema: taskSchema,
    rootValue: global,
    graphiql: true
}));

app.listen(app.get('port'), () => {
    console.log("Node app is running at localhost:" + app.get('port'))
})
