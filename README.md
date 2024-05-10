# Recipe book

## Local development

## Start a local postgres container

- TODO: what did I create `bin/postgres` for?

- create container (once)
  ```
  docker run -p 5432:5432 --name recipes-postgres-local -e POSTGRES_PASSWORD=postgres -d postgres
  ```
  TODO: .env file

- stop container
  ```
  docker stop recipes-postgres-local
  ```

- restart container
  ```
  docker restart recipes-postgres-local
  ```

## DB migrations

- generate a migration
  ```
  npx typeorm migration:generate migrations/Tags -d dist/datasource.js
  ```
  TODO: do I need to add entities to the options first?

- run a migration (`--fake` for dry run)
  ```
  npx typeorm migration:run --fake -d dist/datasource.js
  ```

## TODOs

- // TODO comments
- recipe list mobile layout
- recipe list pagination
- add tags to recipes
- filter recipes
  - by tag
  - by name
  - fulltext search?
- upload picture
- tests and ci pipeline
- deploy to AWS?
  - if I deploy to a fresh database, I will probably be missing the Recipe table
- authn and authz
- import recipe from website / youtube video