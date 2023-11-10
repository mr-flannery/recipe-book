import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipes/recipes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeEntity } from './recipes/db/recipe.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

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
      entities: [RecipeEntity], // TODO: helper function?
      synchronize: true, // TODO: shouldn't be set to true in production - what does this do?
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      serveRoot: '/static',
      serveStaticOptions: { index: false }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// TODO: error handling?
// TODO: migrations!!!
