import { Recipe } from "./domain/recipe";
import { z } from "zod";

export interface RecipeDto {
  name: string;
  ingredients: string;
  instructions: string;
  prepTime: string;
  cookTime: string;
}

const RecipeSchema = z.object({
  name: z.string().min(1).max(40),
  ingredients: z.string(),
  instructions: z.string(),
  prepTime: z.coerce.number(),
  cookTime: z.coerce.number()
});

export function toRecipe(recipeDto: RecipeDto): Recipe {
  try {
    return RecipeSchema.parse(recipeDto) as Recipe
  } catch (error) {
    // TODO: error handling wtf
    throw error
  }
}

export function fromRecipe(recipe: Recipe): RecipeDto {
  // TODO
  return recipe as undefined as RecipeDto
}