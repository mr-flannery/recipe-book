import { execute } from "./exec";

async function containerExists(containerName: string) {
  try {
    await execute(`docker container inspect ${containerName}`);
    return true;
  } catch (error) {
    return false
  }
}

(async () => {
  const containerName = 'recipes-postgres-local'
  if (await containerExists(containerName)) {
    await execute(`docker restart ${containerName}`)
  } else {
    await execute('docker run -p 5432:5432 --name recipes-postgres-local -e POSTGRES_PASSWORD=postgres -d postgres')
    await execute(`PGPASSWORD=postgres psql -h localhost -p 5432 -U postgres -c 'CREATE DATABASE recipes'`)
  }
})();
