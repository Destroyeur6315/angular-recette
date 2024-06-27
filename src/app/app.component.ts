import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponentComponent } from './shared/component/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './shared/component/footer-component/footer-component.component';
import { ListeRecetteComponentComponent } from './liste-recette-component/liste-recette-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavbarComponentComponent, 
    FooterComponentComponent,
    ListeRecetteComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-project';
}
