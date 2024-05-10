import { DataSource } from "typeorm"
import { RecipeEntity } from "./recipes/db/recipe.entity"
import { TagEntity } from "./recipes/db/tag.entity"

// TODO: these options and the ones in app.modules.ts should be the same
const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'recipes',
  entities: [RecipeEntity, TagEntity], // TODO: helper function
  migrations: ["dist/migrations/*.js"], // js because we need to transpile first, path is relative from project root
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource;