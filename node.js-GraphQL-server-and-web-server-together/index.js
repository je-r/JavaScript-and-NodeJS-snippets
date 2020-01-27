var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

var webRouter = express.Router()
webRouter.get("/",function(req,res) {
  res.send("<html><body><h1>hello there!</h1></body><html>");
});
app.use("/web",webRouter);

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql or to localhost:4000/web' ));
