import { Component,OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { GestionnaireComponent } from '../../gestionnaire/gestionnaire.component';
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent implements OnInit {

  transactions: any[] = [];
  // newTransaction = {
  //   typeTransaction: 'location',
  //   montant: '',
  //   dateTransaction: '',
  //   statutTransaction: 'en attente',
  //   propriete_id: '',
  //   user_id : ''
  // };

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

  acceptTransaction(id: number): void {
    this.transactionService.updateTransactionStatus(id, 'accepté').subscribe(
      () => {
        console.log('Transaction acceptée');
        // Mettre à jour la liste des transactions
      },
      (error) => {
        console.error('Erreur lors de l\'acceptation de la transaction', error);
      }
    );
  }
  
  rejectTransaction(id: number): void {
    this.transactionService.updateTransactionStatus(id, 'rejeté').subscribe(
      () => {
        console.log('Transaction rejeté');
        // Mettre à jour la liste des transactions
      },
      (error) => {
        console.error('Erreur lors du rejet de la transaction', error);
      }
    );
  }

}
