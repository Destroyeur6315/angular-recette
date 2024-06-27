import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetteService } from '../service/recette.service';
import { Recette } from '../models/recette.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detail-recette-component',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './detail-recette-component.component.html',
  styleUrl: './detail-recette-component.component.scss'
})
export class DetailRecetteComponentComponent {

  public recette: Recette | undefined;

  constructor(
    private route: ActivatedRoute,
    private readonly serviceRecette: RecetteService
  )
  {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      let id_number = parseInt(id);
      this.serviceRecette.getRecetteById(id_number).subscribe((data: Recette | undefined) => {
        this.recette = data;
      });
    }
  }


}
