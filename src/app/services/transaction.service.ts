import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://localhost:8000/api/transactions';
  constructor(private http: HttpClient) { }

  getTransactions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getMesTransactions(): Observable<{ transactions: any[] }> {
    return this.http.get<{ transactions: any[] }>(`${this.apiUrl}/mes-transactions`);
  }

  filterTransactions(from: string, to: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/filterByDate`, { from, to });
  }

  createTransaction(transactionData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, transactionData);
  }

  createTransactionVente(transactionData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/transactionsVente`, transactionData);
  }
  

  updateTransactionStatus(id: number, statutTransaction: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/statutTrsansaction`, { statutTransaction });
  }
}
