import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { LinkService } from '../../../service/link.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    CommonModule
  ],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.scss'
})
export class NavbarComponentComponent {

  public listeLink: string[] = [];

  constructor(
    private readonly rooter: Router,
    private linkService: LinkService,
    private readonly authService: AuthService
  ){}

  ngOnInit(){
    this.listeLink = this.linkService.getListLink();
  }

  redirigeToIngredient() {
    this.rooter.navigateByUrl('/ingredient');
  }

  redirigeToAccueil() {
    this.rooter.navigateByUrl('/accueil');
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
    this.redirigeToAccueil();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  redirigeToRecette() {
    this.rooter.navigateByUrl('/liste-recette');
  }
    
}
