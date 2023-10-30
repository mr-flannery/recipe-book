import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from '../domain/recipe';

@Entity()
export class RecipeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
})
  name: string;

  @Column("text")
  instructions: string;

  @Column("text")
  ingredients: string;
  
  @Column("int")
  prepTime: number;

  @Column("int")
  cookTime: number;

  static fromRecipe(recipe: Recipe): RecipeEntity {
    const recipeEntity = new RecipeEntity()
    recipeEntity.name = recipe.name;
    recipeEntity.ingredients = recipe.ingredients;
    recipeEntity.instructions = recipe.instructions;
    recipeEntity.cookTime = parseInt(recipe.cookTime);
    recipeEntity.prepTime = parseInt(recipe.prepTime);
    return recipeEntity;
  }

  static toRecipe(recipeEntity: RecipeEntity): Recipe {
    return {
      id: recipeEntity.id.toString(),
      name: recipeEntity.name,
      cookTime: recipeEntity.cookTime.toString(),
      prepTime: recipeEntity.prepTime.toString(),
      ingredients: recipeEntity.ingredients,
      instructions:recipeEntity.instructions
    }
  }
}
