# ss-middleware

## Steps to run locally ->

* yarn install
* `cp .env.example .env`
* Provide your GitHub Auth token to `.env` as `GITHUB_AUTH=`
* yarn start
* GraphQL endpoint is ready to serve at 4001

## Example Queries

Queries can be run on the hosted API [here](https://stormy-ocean-52456.herokuapp.com/)

```
query searchQuery{
  search(query: "john") {
    id
    name
  }
}

query getUserRepositories{
  getUserRepositories(login: "therise3107") {
    id
    name
    description
    stargazerCount
  }
}
```
Client App here -> https://github.com/therise3107/ss-frontend
Client App Demo -> https://calm-peak-71763.herokuapp.com/
