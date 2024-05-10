import { Module } from '@nestjs/common';
import { RecipesApiController } from './recipes-api.controller';
import { RecipeService } from './domain/recipes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeEntity } from './db/recipe.entity';
import { RecipeViewController } from './recipes-view.controller';
import { TagEntity } from './db/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeEntity, TagEntity])], // TODO: helper function that automatically lists all entities?
  controllers: [RecipesApiController, RecipeViewController],
  providers: [RecipeService],
  exports: [RecipeService] // TODO: encapsulation?
})
export class RecipeModule {}
