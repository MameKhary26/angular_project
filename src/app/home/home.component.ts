import { Component } from '@angular/core';
import { Router } from '@angular/router';

// @Component({
//   // selector: 'app-home',
//   // templateUrl: './home.component.html',
//   // styleUrl: './home.component.css'
// })


export class HomeComponent {

  constructor(private router: Router) { }  // Injecte le routeur pour la navigation

  // Méthode pour rediriger vers la page d'inscription
  goToRegister() {
    this.router.navigate(['/inscription']);  //
  }
}
