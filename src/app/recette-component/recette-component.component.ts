import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TruncatePipe } from '../pipe/truncate.pipe';


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
  ){
  }

  redirigeToDetailRecette() {
    this.router.navigateByUrl('/detail-recette/' + this.id);
  }

}
