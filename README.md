# Recipe book

## Local development

## Start a local postgres container

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