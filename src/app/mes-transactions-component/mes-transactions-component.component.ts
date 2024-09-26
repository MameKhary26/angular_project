import { Component } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-mes-transactions-component',
  templateUrl: './mes-transactions-component.component.html',
  styleUrl: './mes-transactions-component.component.css'
})
export class MesTransactionsComponentComponent {


  transactions: any[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getMesTransactions().subscribe(
      (data) => {
        this.transactions = data.transactions;
        console.log(this.transactions); // Affiche les transactions récupérées
      },
      (error) => {
        console.error('Erreur lors de la récupération des transactions', error);
      }
    );
  }

}
