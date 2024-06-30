import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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