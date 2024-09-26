import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BienService } from '../../services/bien.service';

@Component({
  selector: 'app-bien-list',
  templateUrl: './bien-list.component.html',
  styleUrls: ['./bien-list.component.css']
})
export class BienListComponent implements OnInit {

  biens: any[] = [];
  filters = {
    adresse: '',
    typePropriete: '',
    prix: null,
    superficie: null
  };

  constructor(private bienService: BienService, private router: Router) {}

  ngOnInit(): void {
    // Appeler la méthode pour charger les biens lors de l'initialisation
    this.searchBiens();
  }

  onSearch(): void {
    this.searchBiens();
  }

  private searchBiens(): void {
    const searchFilters = {
      adresse: this.filters.adresse || '',
      typePropriete: this.filters.typePropriete || '',
      prix: this.filters.prix || null,
      superficie: this.filters.superficie || null,
    };

    this.bienService.searchBiens(searchFilters).subscribe((data) => {
      this.biens = data;
      console.log(this.biens);
      // Navigation vers la liste avec les paramètres de requête
      this.router.navigate(['/liste-bien-dispo'], { queryParams: this.filters });
    }, (error) => {
      console.error('Erreur lors de la recherche des biens:', error);
    });
  }
}
