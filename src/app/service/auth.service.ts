import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private _isAuthenticated: boolean = false;

  login() {
    localStorage.setItem('isAdmin', JSON.stringify(true)); 
  }

  logout() {
    localStorage.setItem('isAdmin', JSON.stringify(false)); 
  }

  isAuthenticated(): boolean {
    return JSON.parse(localStorage.getItem('isAdmin') || "");
  }
}