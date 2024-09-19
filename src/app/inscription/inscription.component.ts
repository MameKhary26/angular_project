import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  registerForm: FormGroup;


  user = { nom: '', prenom: '', email: '', motPasse: '' };

  constructor(private authService: AuthService,private fb:FormBuilder,private route:Router) {
    this.registerForm = this.fb.group({
      'nom': ['',[Validators.required]],
      'prenom': ['',[Validators.required]],
      'email': ['',[Validators.required]],
      'motPasse': ['',[Validators.required]],
    })
  }

  onSubmit() {
    if(this.registerForm.valid){
      const formData = new FormData();
      formData.append('nom',this.registerForm.get('nom')?.value);
      formData.append('prenom',this.registerForm.get('prenom')?.value);
      formData.append('email',this.registerForm.get('email')?.value);
      formData.append('motPasse',this.registerForm.get('motPasse')?.value);

      this.authService.inscription(formData).subscribe(
        (response) => {
          console.log(response);
          this.route.navigate(['login']);
        },
        (error) => {
          console.error('Erreur lors de l\'inscription', error);
        }
      )
    }
    // this.authService.inscription(this.user).subscribe(
    //   response => {
    //     console.log('Inscription réussie', response);
    //   },
    //   error => {
    //     console.error('Erreur lors de l\'inscription', error);
    //   }

    // );
  }

}
