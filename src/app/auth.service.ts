// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private baseUrl = 'http://localhost:8000/api';

//   constructor(private http: HttpClient) { }

//   inscription(userData: any): Observable<any> {
//     return this.http.post<AuthService>(`${this.baseUrl}/inscription`, userData);
//   }

//   login(userData: any): Observable<any> {
//     return this.http.post(`${this.baseUrl}/login`, userData);
//   }

//   isAuthenticated(): boolean {
//     return !!localStorage.getItem('userToken');
  
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = 'http://localhost:8000/api'; // URL de votre backend Laravel

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, credentials);
  }

  inscription(user: any): Observable<any> {
    return this.http.post(`${this.apiURL}/inscription`, user);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}

