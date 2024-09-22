import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BienService {

  private apiUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  getDispo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/disponibles`);
  }

  searchBiens(filters: any): Observable<any> {
    let params = new HttpParams();

    if (filters.adresse) {
      params = params.append('adresse', filters.adresse);
    }
    if (filters.typePropriete) {
      params = params.append('typePropriete', filters.typePropriete);
    }
    if (filters.prix) {
      params = params.append('prix', filters.prix);
    }
    // if (filters.prix_max) {
    //   params = params.append('prix_max', filters.prix_max);
    // }
    if (filters.superficie) {
      params = params.append('superficie', filters.superficie);
    }
    // if (filters.superficie_max) {
    //   params = params.append('superficie_max', filters.superficie_max);
    // }

    return this.http.get(this.apiUrl, { params });
  }

  getBiens(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Créer un nouveau bien
  createBien(bien: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addbiens`, bien);
  }

  // Récupérer un bien spécifique
  getBien(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Mettre à jour un bien
  updateBien(id: number, bien: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, bien);
  }

  // Supprimer un bien
  deleteBien(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getProprio(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/allUser`);
  }
  getBienP(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/disponibles`);
  }
}
