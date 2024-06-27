import { Injectable } from "@angular/core";
import { Recette } from "../models/recette.model";
import { RECETTE } from "../data/recette";
import { Observable, of } from "rxjs";
import { Ingredient } from "../models/ingredient.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class RecetteService{

    constructor(
      private httpClient: HttpClient
    ){}

    getRecetteAPI(): Observable<Recette[]>{
      return this.httpClient.get<Recette[]>("http://localhost/1234");
    }

    getAllRecette(): Observable<Recette[]>{
        let recettesStorage = localStorage.getItem('recettes');
        let listeRecette: Recette[] = [];

        if (recettesStorage) {
            let data = JSON.parse(recettesStorage);
    
            data?.forEach((recette:any) => {
              let ingredient = recette.ingredient;
              let myListeIngredient:  Ingredient[] = [];
      
              ingredient.forEach((element:any) => {
                myListeIngredient.push({
                  id: element.id,
                  type: {value: element.type.value},
                  quantite: element.quantite
                })
              });
              listeRecette.push({
                id: recette.id,
                nom : recette.nom,
                description : recette.description,
                ingredient: myListeIngredient
              });
            });
        }

        return of(listeRecette);
    }

    getRecetteById(id: number): Observable<Recette | undefined>{
        let recettesStorage = localStorage.getItem('recettes');
        let listeRecette: Recette[] = [];
        
        if (recettesStorage) {
            let data = JSON.parse(recettesStorage);

            data?.forEach((recette:any) => {
            let ingredient = recette.ingredient;
            let myListeIngredient:  Ingredient[] = [];
    
            ingredient.forEach((element:any) => {
                myListeIngredient.push({
                id: element.id,
                type: {value: element.type.value},
                quantite: element.quantite
                })
            });
           
            listeRecette.push({
                id: recette.id,
                nom : recette.nom,
                description : recette.description,
                ingredient: myListeIngredient
            });
            });
        }

        return of(listeRecette.find(recette => recette.id === id ));
    }

    addRecette(nouvelle_recette: Recette){
      let recettes = JSON.parse(localStorage.getItem('recettes') || '[]');
      recettes.push(nouvelle_recette);
      localStorage.setItem('recettes', JSON.stringify(recettes)); 
    }
}