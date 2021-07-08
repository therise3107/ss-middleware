/* eslint-disable no-console */
const { GraphQLServer } = require('graphql-yoga');
const { Octokit } = require('@octokit/core');
const resolvers = require('./graphql/resolvers');

require('dotenv').config();

const api = new Octokit({ auth: process.env.GITHUB_AUTH });

const server = new GraphQLServer({
  typeDefs: 'src/graphql/schema.graphql',
  resolvers,
  context: { api }
});

if (process.env.ENV !== 'production') {
  server.start({ port: 4001 }, () => console.log('Server is running on http://localhost:4001'));
} else {
  server.start(() => console.log('Server is running'));
}
