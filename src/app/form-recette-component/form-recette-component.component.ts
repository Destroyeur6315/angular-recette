import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../models/ingredient.model';
import { Recette } from '../models/recette.model';
import { TypeIngredient } from '../models/type-ingredient.model';
import { IngredientService } from '../service/ingredient.service';
import { RecetteService } from '../service/recette.service';

@Component({
  selector: 'app-form-recette-component',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './form-recette-component.component.html',
  styleUrl: './form-recette-component.component.scss'
})
export class FormRecetteComponentComponent {
  @Output() recetteadd = new EventEmitter();

  public listeIngredient: Ingredient[] = [];
  public foods: TypeIngredient[] = [];
  public listeRecette: Recette[] = [];

  constructor(
    private readonly ingredientservice: IngredientService,
    private readonly recetteservice: RecetteService
  )
  {}

  ngOnInit(){
    this.foods = this.ingredientservice.getListeTypeIngredient();
  }

  removeIngredientToRecette() {
    throw new Error('Method not implemented.');
  }
  
  addIngredientToRecette(form: NgForm, event: Event) {
    if(this.listeIngredient.length < 1){
      this.listeIngredient.push({
        type: { value: form.value.ingredient} as TypeIngredient, 
        quantite: form.value.quantite, 
        id: 0 });
      return
    }

    const new_id = Math.max(...this.listeIngredient.map(i => i.id)) +1;

    this.listeIngredient.push({
      type: { value: form.value.ingredient} as TypeIngredient, 
      quantite: form.value.quantite, 
      id: new_id });
  }

  deleteIngredeint(id: number) {
    this.listeIngredient = this.listeIngredient.filter(
      ingredient => ingredient.id !== id)
  }

  onSubmit(form: NgForm, subForm: NgForm) {
    if(this.listeIngredient.length < 1){
      return;
    }

    const nouvelle_recette: Recette = {
      id: Math.floor(Math.random() * 100),
      nom: form.value.nom,
      description: form.value.description,
      ingredient: this.listeIngredient
    };
    
    this.recetteservice.addRecette(nouvelle_recette);
    
    form.reset();
    subForm.reset();
    this.recetteadd.emit();
  }
}
