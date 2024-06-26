import { Get, Controller, Res, Post, Req, Param } from '@nestjs/common';
import { Response } from 'express';
import { RecipeService } from './domain/recipes.service';
import { RecipeDto, fromRecipe, toRecipe } from './recipe.dto';

// TODO: can I pull out 'api' somehow?
@Controller('recipes')
export class RecipeViewController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async listPage(@Res() res: Response) {
    const recipes = (await this.recipeService.list()).map(fromRecipe)

    return res.render('recipes/list', { layout: 'default', recipes })
  }

  @Get('/new')
  newPage(@Res() res: Response) {
    return res.render('recipes/new')
  }

  @Get(':id')
  async detailPage(@Param() params: { id: string }, @Res() res: Response) {
    // TODO: if there's no recipe with the given ID, this will currently produce a 500
    const recipe = fromRecipe(await this.recipeService.getById(parseInt(params.id)))
    
    return res.render('recipes/detail', { recipe })
  }

  @Get(':id/edit')
  async editPage(@Param() params: { id: string }, @Res() res: Response) {
    // TODO: if there's no recipe with the given ID, this will currently produce a 500
    const recipe = fromRecipe(await this.recipeService.getById(parseInt(params.id)))
    
    return res.render('recipes/edit', { recipe })
  }
}
