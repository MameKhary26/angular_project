import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { HttpClient } from '@angular/common/http';
import { BienService } from '../services/bien.service';
import { Transaction } from '../model/transaction.model';
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
    constructor(private bienService: BienService, private transactionService: TransactionService, private http: HttpClient) { }

  ngOnInit(): void {
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
    this.transactionService.createTransaction(this.transaction).subscribe(
      response => {
        console.log('Transaction effectuée avec succès', response);
      },
      error => {
        console.error('Erreur lors de la transaction', error);
      }
    );
  }

}
