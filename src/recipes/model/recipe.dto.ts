import { Recipe } from "./recipe";

export interface RecipeDto {
  name: string;
  ingredients: string;
  instructions: string;
  prepTime: string;
  cookTime: string;
}

export function toRecipe(recipeDto: RecipeDto): Recipe {
  // TODO: schema validation
  return recipeDto
}

export function fromRecipe(recipe: Recipe): RecipeDto {
  return recipe
}