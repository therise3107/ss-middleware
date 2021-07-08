const getUserRepositories = async (_, args, context) => {
  const result = await context.api.graphql(
    `
    query repositories($login: String!) {
      user(login: $login) {
        repositories(first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {
          nodes {
            id
            name
            description
            stargazerCount
          }
        }
      }
    }
  `,
    {
      login: args.login
    }
  );

  return result.user.repositories.nodes;
};

const search = async (_, args, context) => {
  const result = await context.api.request('GET /search/users', {
    q: args.query,
    per_page: 5,
    page: 1
  });

  return result.data.items;
};

module.exports = {
  getUserRepositories,
  search
};
