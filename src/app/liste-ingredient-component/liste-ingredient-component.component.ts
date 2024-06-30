import { Component } from '@angular/core';
import { IngredientService } from '../service/ingredient.service';
import { Ingredient } from '../models/ingredient.model';
import { TypeIngredient } from '../models/type-ingredient.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-liste-ingredient-component',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
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
    this.ingredientService.getListeTypeIngredient().subscribe((listeIngredient: TypeIngredient[]) => {
      this.listeIngredient = listeIngredient;
    })
  }

  onSubmit(form: NgForm) {
    let ingredient: TypeIngredient = {
      id: 0,
      name: form.value.nom,
      description : form.value.description
    }

    this.ingredientService.addNewIngredient(ingredient);

    form.reset();
  }
}
