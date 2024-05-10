import { Tag } from "./tag";

export interface Recipe {
  id?: string;
  name: string;
  prepTime: number;
  cookTime: number;
  ingredients: string;
  instructions: string;
  tags: Tag[];
} 
