// // import { Component } from '@angular/core';
// // import { AuthService } from '../auth.service';
// // import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// // import { FormControl, FormGroup, Validators } from '@angular/forms';
// // @Component({
// //   selector: 'app-login',
// //   templateUrl: './login.component.html',
// //   styleUrl: './login.component.css'
// // })
// // export class LoginComponent {
  
// //   users = { email: '', motPasse: '' };

// //   constructor(private authService: AuthService) {}
// //   loginForm = new FormGroup({
// //     email: new FormControl('',[Validators.required]),
// //     motPasse: new FormControl('',[Validators.required]),
// //   })

// //   // login() {
// //   //   if(this.loginForm.valid)
// //   //   {
// //   //     this.authService.login(this.loginForm.valid).subscribe(
// //   //       (response) => {
// //   //         console.log('Connexion réussie', response);
// //   //         localStorage.setItem('token', response.token); // Stockage du token
// //   //       },
// //   //       (error) => {
// //   //         console.error('Erreur lors de la connexion', error);
// //   //       }
// //   //     );
// //   //   }
// //   // }

// //   login() {
// //     if (this.loginForm.valid) {
// //       const credentials = this.loginForm.value; // Récupérer les données du formulaire
  
// //       this.authService.login(credentials).subscribe(
// //         (response: any) => {
// //           console.log('Connexion réussie', response);
// //           localStorage.setItem('token', response.token); // Stockage du token
// //         },
// //         (error) => {
// //           console.error('Erreur lors de la connexion', error);
// //         }
// //       );
// //     }
// //   }

// // }

// // // export class LoginComponent {
// // //   'email': string;
// // //   'motPasse': string;

// // //   constructor(private http: HttpClient) {}

// // //   login() {
// // //     const credentials = {
// // //       email: this.email,
// // //       password: this.motPasse
// // //     };

// // //     this.http.post('http://localhost:8000/api/login', credentials, {
// // //       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// // //     }).subscribe({
// // //       next: (response) => {
// // //         console.log('Connexion réussie', response);
// // //       },
// // //       error: (error: HttpErrorResponse) => {
// // //         if (error.status === 401) {
// // //           console.error('Identifiants incorrects', error);
// // //           alert('Identifiants incorrects.');
// // //         } else {
// // //           console.error('Erreur serveur', error);
// // //           alert('Erreur lors de la connexion. Veuillez réessayer.');
// // //         }
// // //       }
// // //     });
// // //   }
// // // }

// import { Component } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
  
//   loginForm = new FormGroup({
//     email: new FormControl('', [Validators.required]),
//     motPasse: new FormControl('', [Validators.required]),  // Remplacez "motPasse" par "password"
//   });

//   constructor(private authService: AuthService) {}

//   login() {
//     if (this.loginForm.valid) {
//       const credentials = this.loginForm.value;

//       this.authService.login(credentials).subscribe(
//         (response: any) => {
//           console.log('Connexion réussie', response);
//           localStorage.setItem('token', response.token); // Stockage du token
//         },
//         (error) => {
//           console.error('Erreur lors de la connexion', error);
//         }
//       );
//     }
//   }
// }

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    motPasse: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService,private router:Router) {}

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          const pro = response.profil;
          console.log('Login successful', response);
          localStorage.setItem('token', response.token); // Stock the token in local storage
          // window.location.href = '/assets/index-2.html';
          if(pro === "1")
          {
            this.router.navigate(['user-list']);
          }
          if(pro === "0")
            {
              window.location.href = '/assets/index-2.html';
            }
          this.router.navigate([response.redirect]);
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
    }
  }
  
}
