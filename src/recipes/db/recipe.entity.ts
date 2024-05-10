import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Recipe } from '../domain/recipe';
import { TagEntity } from './tag.entity';

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

  @ManyToMany(() => TagEntity)
  @JoinTable()
  tags: TagEntity[]

  static fromRecipe(recipe: Recipe): RecipeEntity {
    const recipeEntity = new RecipeEntity()
    recipeEntity.name = recipe.name;
    recipeEntity.ingredients = recipe.ingredients;
    recipeEntity.instructions = recipe.instructions;
    recipeEntity.cookTime = recipe.cookTime;
    recipeEntity.prepTime = recipe.prepTime;
    // TODO: tags
    return recipeEntity;
  }

  static toRecipe(recipeEntity: RecipeEntity): Recipe {
    return {
      id: recipeEntity.id.toString(),
      name: recipeEntity.name,
      cookTime: recipeEntity.cookTime,
      prepTime: recipeEntity.prepTime,
      ingredients: recipeEntity.ingredients,
      instructions:recipeEntity.instructions,
      // TODO: tags
      tags: []
    }
  }
}
