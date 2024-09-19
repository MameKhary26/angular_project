import { Component,OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent implements OnInit {

  transactions: any[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }
}
