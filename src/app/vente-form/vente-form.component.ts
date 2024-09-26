import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { HttpClient } from '@angular/common/http';
import { BienService } from '../services/bien.service';
import { Transaction } from '../model/transaction.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-vente-form',
  templateUrl: './vente-form.component.html',
  styleUrl: './vente-form.component.css'
})
export class VenteFormComponent implements OnInit{

  users: any[] = [];
  proprietes!: any;
  transaction = {
    user_id: '',
    propriete_id: '',
    montant: 0,
    typeTransaction: 'vente',
    statutTransaction:'en attente',
    dateTransaction:''
  };
  transactionForm!: FormGroup;
    constructor(private fb: FormBuilder,private bienService: BienService, private router: Router, private transactionService: TransactionService, private http: HttpClient) { }

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      user_id: ['',[Validators.required]],
      propriete_id: ['',[Validators.required]],
      montant: ['',[Validators.required]],
      dateTransaction: ['',[Validators.required]],
      typeTransaction: ['',[Validators.required]],
    });
    this.fetchUsers();
    this.fetchProprietes();
  }

  // Récupérer les utilisateurs (propriétaires et locataires)
  fetchUsers(): void {
    this.http.get<any[]>('http://localhost:8000/api/users').subscribe(data => {
      this.users = data;
    });
  }

  // Récupérer les propriétés disponibles
  fetchProprietes(): void {
      this.bienService.getBienP().subscribe(
        (response) => {
          this.proprietes = response;
          console.log(this.proprietes);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  // Soumettre le formulaire pour effectuer la transaction
  onSubmit(): void {
    const formData = new FormData();
    formData.append('user_id', this.transactionForm.get('user_id')?.value);
    formData.append('propriete_id', this.transactionForm.get('propriete_id')?.value);
    formData.append('montant', this.transactionForm.get('montant')?.value);
    formData.append('dateTransaction', this.transactionForm.get('dateTransaction')?.value);
    formData.append('typeTransaction', this.transactionForm.get('typeTransaction')?.value);
    this.transactionService.createTransactionVente(formData).subscribe(
      response => {
        console.log('Transaction effectuée avec succès', response);
        // this.router.navigate(['/vente']);
      
      },

      error => {
        console.error('Erreur lors de la transaction', error);
      }
    );
  }

}
