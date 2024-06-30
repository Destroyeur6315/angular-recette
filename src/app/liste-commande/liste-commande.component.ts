import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RecetteComponentComponent } from '../recette-component/recette-component.component';
import { FormRecetteComponentComponent } from '../form-recette-component/form-recette-component.component';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RecetteService } from '../service/recette.service';
import { Recette } from '../models/recette.model';

@Component({
  selector: 'app-liste-commande',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RecetteComponentComponent,
    FormRecetteComponentComponent,
    CommonModule,
    MatPaginatorModule,
    MatTableModule
  ],
  templateUrl: './liste-commande.component.html',
  styleUrl: './liste-commande.component.scss'
})
export class ListeCommandeComponent {
  recetteCommande: any;
  public recette_commande: Recette[] = [];

  constructor(private recetteservice: RecetteService){
  }

  ngOnInit(){
    this.recetteservice.getRecetteCommande().subscribe((recette: Recette[]) => {
      this.recette_commande = recette;
    })
  }

}
