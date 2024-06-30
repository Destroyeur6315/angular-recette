import { Injectable } from "@angular/core";
import { TypeIngredient } from "../models/type-ingredient.model";
import { TYPEINGREDIENT } from "../data/ingredient";
import { HttpClient } from "@angular/common/http";
import { Ingredient } from "../models/ingredient.model";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class IngredientService{
    private listeTypeIngredient: TypeIngredient[] = [];

    constructor(private httpClient: HttpClient){
        this.httpClient.get<TypeIngredient[]>("https://664ba07f35bbda10987d9f99.mockapi.io/api/ingredients").subscribe((liste: TypeIngredient[]) => {
            this.listeTypeIngredient = liste;
        })
    }

    getListeTypeIngredient(): Observable<TypeIngredient[]>{
        return of(this.listeTypeIngredient);
    }

    addNewIngredient(noueau: TypeIngredient){
        this.listeTypeIngredient.push(noueau);
    }
}