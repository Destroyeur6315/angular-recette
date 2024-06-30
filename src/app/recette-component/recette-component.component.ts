import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TruncatePipe } from '../pipe/truncate.pipe';
import { RecetteService } from '../service/recette.service';
import { Recette } from '../models/recette.model';


@Component({
  selector: 'app-recette-component',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TruncatePipe
  ],
  templateUrl: './recette-component.component.html',
  styleUrl: './recette-component.component.scss',
})
export class RecetteComponentComponent {

  @Input() nom!: string;
  @Input() description!: string;
  @Input() id!: number;

  constructor(
    private readonly router: Router,
    private readonly recetteService: RecetteService
  ){
  }

  redirigeToDetailRecette() {
    this.router.navigateByUrl('/detail-recette/' + this.id);
  }

  commander() {
    let commandeRecette;
    this.recetteService.getRecetteById(this.id).subscribe((recette: Recette | undefined) => {
      commandeRecette = recette
    })

    this.recetteService.addToCommande(commandeRecette);
  }

}
