import { Injectable } from "@angular/core";
import { TypeIngredient } from "../models/type-ingredient.model";
import { TYPEINGREDIENT } from "../data/ingredient";

@Injectable({
    providedIn: 'root'
})
export class IngredientService{
    private listeTypeIngredient: TypeIngredient[] = [];

    constructor(){
        this.listeTypeIngredient = TYPEINGREDIENT;
    }

    getListeTypeIngredient(){
        return this.listeTypeIngredient;
    }
}