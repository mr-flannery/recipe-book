import { Module } from '@nestjs/common';
import { RecipeController } from './recipes.controller';
import { RecipeService } from './domain/recipes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeEntity } from './db/recipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeEntity])], // TODO: helper function?
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
