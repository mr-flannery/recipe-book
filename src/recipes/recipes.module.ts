import { Module } from '@nestjs/common';
import { RecipeController } from './recipes.controller';
import { RecipeService } from './model/recipes.service';

@Module({
  imports: [],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
