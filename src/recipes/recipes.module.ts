import { Module } from '@nestjs/common';
import { RecipesApiController } from './recipes-api.controller';
import { RecipeService } from './domain/recipes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeEntity } from './db/recipe.entity';
import { RecipeViewController } from './recipes-view.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeEntity])], // TODO: helper function?
  controllers: [RecipesApiController, RecipeViewController],
  providers: [RecipeService],
  exports: [RecipeService] // TODO: encapsulation?
})
export class RecipeModule {}
