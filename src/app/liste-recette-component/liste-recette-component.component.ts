import { Component, OnInit, ViewChild } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { RecetteComponentComponent } from '../recette-component/recette-component.component';
import { FormRecetteComponentComponent } from '../form-recette-component/form-recette-component.component';
import { CommonModule } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { Recette } from '../models/recette.model';
import { RecetteService } from '../service/recette.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'; // Si vous utilisez mat-table
import { PageEvent } from '@angular/material/paginator';
import { Ingredient } from '../models/ingredient.model';


@Component({
  selector: 'app-liste-recette-component',
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
  templateUrl: './liste-recette-component.component.html',
  styleUrl: './liste-recette-component.component.scss'
})
export class ListeRecetteComponentComponent implements OnInit{

  public listeRecette: Recette[] = [];
  public display: boolean = false;
  public pageEvent!: PageEvent;

  displayedColumns: string[] = ['name', 'ingredients'];;
  dataSource = new MatTableDataSource<Recette>();
  totalItems = 0; 
  itemsPerPage = 2;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private readonly router: Router,
    private readonly recetteservice: RecetteService
  ){
  }

  ngOnInit(){
    this.recetteservice.getAllRecette().subscribe((data: Recette[]) => {
      this.listeRecette = data;
    });    
    
  }

  loadData(){
    this.recetteservice.getAllRecette().subscribe((data: Recette[]) => {
      this.dataSource.data = data; // Assurez-vous que votre API renvoie les éléments dans un champ 'items'
      this.dataSource.paginator = this.paginator;
      this.totalItems = data.length;
    });
  }

  addRecette() {
    this.display = !this.display;
  }

  onRecetteAdd() {
    this.display = false;
    location.reload();
  }

  onPageChange(event: PageEvent) {
  }
    
}
