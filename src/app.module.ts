import { Module } from '@nestjs/common';
import { RecipeModule } from './recipes/recipes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeEntity } from './recipes/db/recipe.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TagEntity } from './recipes/db/tag.entity';

@Module({
  imports: [
    RecipeModule,
    // TODO: pull out to .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'recipes',
      entities: [RecipeEntity, TagEntity], // TODO: helper function?
      migrations: ["./migrations/*.js"], // js
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      serveRoot: '/static',
      serveStaticOptions: { index: false }
    })
  ]
})
export class AppModule {}

// TODO: error handling?
// TODO: migrations!!!
