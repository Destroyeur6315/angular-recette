import { Component } from '@angular/core';
import { IngredientService } from '../service/ingredient.service';
import { Ingredient } from '../models/ingredient.model';
import { TypeIngredient } from '../models/type-ingredient.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-ingredient-component',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './liste-ingredient-component.component.html',
  styleUrl: './liste-ingredient-component.component.scss'
})
export class ListeIngredientComponentComponent {

  public listeIngredient: TypeIngredient[] = [];

  constructor(
    private readonly ingredientService: IngredientService
  ){}

  ngOnInit(){
    this.listeIngredient = this.ingredientService.getListeTypeIngredient();
  }
}
