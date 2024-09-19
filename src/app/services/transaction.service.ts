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

  filterTransactions(from: string, to: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/filter`, { from, to });
  }
}
