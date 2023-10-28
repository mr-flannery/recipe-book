import { Get, Controller, Res, Post, Req } from '@nestjs/common';
import { Response } from 'express';
import { RecipeService } from './model/recipes.service';
import { RecipeDto, toRecipe } from './model/recipe.dto';

// TODO: can I pull out 'api' somehow?
@Controller('api/recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post('submit')
  submit(@Req() request: Request, @Res() res: Response) {
    // TODO: schema validation
    const recipe = toRecipe(request.body as unknown as RecipeDto)    ;
    this.recipeService.submit(recipe)

    return res
      .status(302)
      .header('Location', '/')
      .send()
  }
}
