import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BienService } from '../services/bien.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bien-form',
  templateUrl: './bien-form.component.html',
  styleUrl: './bien-form.component.css'
})
export class BienFormComponent implements OnInit {

  bienForm: FormGroup;
  bienId: number | null = null;
  biennnn: any;
  @Input()
  user!: any[];

  constructor(
    private formBuilder: FormBuilder,
    private bienService: BienService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bienForm = this.formBuilder.group({
      typePropriete: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      statutPropriete: ['', [Validators.required]],
      superficie: ['', [Validators.required]],
      description: ['',[Validators.required]],
      prix: ['', [Validators.required]],
      user_id: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.bienId = +this.route.snapshot.paramMap.get('id')!;
    if (this.bienId) {
      this.bienService.getBien(this.bienId).subscribe(bien => {
        this.bienForm.patchValue(bien);
      });
    }
    this.getAllProprio();
  }

  submitForm() {
    // if (this.bienForm.valid) {
      // if (this.bienId) {
      //   // Mise à jour
      //   this.bienService.updateBien(this.bienId, this.bienForm.value).subscribe(() => {
      //     this.router.navigate(['/biens']);
      //   });
      // } else {
      //   // Création
      //   this.bienService.createBien(this.bienForm.value).subscribe(() => {
      //     this.router.navigate(['/biens']);
      //   });
      // }
      const formData = new FormData();
      formData.append('typePropriete',this.bienForm.get('typePropriete')?.value);
      formData.append('adresse',this.bienForm.get('adresse')?.value);
      formData.append('statutPropriete',this.bienForm.get('statutPropriete')?.value);
      formData.append('superficie',this.bienForm.get('superficie')?.value);
      formData.append('description',this.bienForm.get('description')?.value);
      formData.append('prix',this.bienForm.get('prix')?.value);
      formData.append('user_id',this.bienForm.get('user_id')?.value);
      this.bienService.createBien(formData).subscribe(
        (response) => {
          this.biennnn = response.data;
          console.log("Bien : ", response);
        },
        (error) => {
          console.log("erreur lors de l'ajout du bien :",error);
        }
      )
    // }
  }

  getAllProprio()
  {
    this.bienService.getProprio().subscribe(
      (response) =>{
        this.user = response.data;
      },
      (error) => {
        console.log(this.user);
        console.log("erreur lors de la recuperation des proprietaires :",error);
      }
    )
  }
}
