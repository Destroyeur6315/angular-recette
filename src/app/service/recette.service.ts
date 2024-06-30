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

    private recette_commande: Recette[] = [];

    constructor(
      private httpClient: HttpClient
    ){}

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
                  type: {name: element.type.name, description: element.type.description, id: element.type.id},
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
                type: {name: element.type.name, description: element.type.description, id: element.type.id},
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

    addToCommande(recette: Recette | undefined){
      if(recette)
        this.recette_commande.push(recette);
    } 

    getRecetteCommande(): Observable<Recette[]>{
      return of(this.recette_commande);
    }
}