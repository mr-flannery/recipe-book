import { Injectable } from '@nestjs/common';
import { Recipe } from './recipe';
import { RecipeEntity } from '../db/recipe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecipeService {
  
  constructor(
    @InjectRepository(RecipeEntity) 
    private readonly recipeRepository: Repository<RecipeEntity>
  ) {}

  async submit(recipe: Recipe) {
      // const recipeEntity = this.recipeRepository.create()
      return this.recipeRepository.save(RecipeEntity.fromRecipe(recipe))
  }

  async list(): Promise<Recipe[]> {
    return (await this.recipeRepository.find()).map(RecipeEntity.toRecipe)
  }

  async getById(id: number): Promise<Recipe> {
    return RecipeEntity.toRecipe(await this.recipeRepository.findOneBy({ id }))
  }

  async edit(recipe: Recipe) {
    return this.recipeRepository.update(recipe.id, RecipeEntity.fromRecipe(recipe))
  }

  async delete(id: string) {
    return this.recipeRepository.delete(id)
  }
}
