import express from 'express';
import resolvers from './resolvers.js';
import schema from './schema.js';
import { graphqlHTTP } from 'express-graphql';
const app= express();

app.get ('/', (req, res) => {
  res.send('Hello World!');
});

const root = resolvers
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8082, () => {
  console.log('Server is running on http://localhost:8082');
});