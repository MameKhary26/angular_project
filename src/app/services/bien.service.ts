import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BienService {

  private apiUrl = 'http://localhost:8000/api/biens';
  constructor(private http: HttpClient) { }
  searchBiens(filters: any): Observable<any> {
    let params = new HttpParams();

    if (filters.adresse) {
      params = params.append('adresse', filters.adresse);
    }
    if (filters.type) {
      params = params.append('type', filters.type);
    }
    if (filters.prix) {
      params = params.append('prix', filters.prix);
    }
    // if (filters.prix_max) {
    //   params = params.append('prix_max', filters.prix_max);
    // }
    // if (filters.superficie_min) {
    //   params = params.append('superficie_min', filters.superficie_min);
    // }
    // if (filters.superficie_max) {
    //   params = params.append('superficie_max', filters.superficie_max);
    // }

    return this.http.get(this.apiUrl, { params });
  }
}
