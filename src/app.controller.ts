import { Get, Controller, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { RecipeService } from './recipes/domain/recipes.service';
import { fromRecipe } from './recipes/recipe.dto';

@Controller()
export class AppController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async root(@Res() res: Response) {
    return res.status(302).header('Location', '/recipes').send();
  }
}
