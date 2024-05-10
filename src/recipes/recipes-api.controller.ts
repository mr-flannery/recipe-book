import { Get, Controller, Res, Post, Req, Param, Delete } from '@nestjs/common';
import { Response } from 'express';
import { RecipeService } from './domain/recipes.service';
import { RecipeDto, fromRecipe, toRecipe } from './recipe.dto';

// TODO: can I pull out 'api' somehow?
@Controller('api/recipes')
export class RecipesApiController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post('submit')
  async submit(@Req() request: Request, @Res() res: Response) {
    const recipe = toRecipe(request.body as unknown as RecipeDto);
    await this.recipeService.submit(recipe)

    return res
      .status(302)
      .header('Location', '/')
      .send()
  }

  @Get()
  async list(@Res() res: Response) {
    const recipes = (await this.recipeService.list()).map(fromRecipe)

    return res.status(200).send(recipes)
  }

  @Post(':id/edit')
  async edit(@Req() request: Request, @Res() res: Response, @Param() params: { id: string }) {
    const recipe = toRecipe({...request.body, id: params.id} as unknown as RecipeDto);
    await this.recipeService.edit(recipe)

    return res
      .status(302)
      .header('Location', `/recipes/${recipe.id}`)
      .send()
  }

  @Delete(':id')
  async delete(@Req() request: Request, @Res() res: Response, @Param() params: { id: string }) {
    await this.recipeService.delete(params.id)

    return res
      .status(302)
      .header('Location', `/recipes`)
      .send()
  }
}
