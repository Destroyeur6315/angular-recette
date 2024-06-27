import { Ingredient } from "./ingredient.model";

export interface Recette {
    id: number,
    nom: string,
    description: string,
    ingredient: Ingredient[]
}