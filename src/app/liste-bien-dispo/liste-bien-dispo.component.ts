import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BienService } from '../services/bien.service';  // Remplacez par votre service

@Component({
  selector: 'liste-bien-dispo-disponibles',
  templateUrl: './liste-bien-dispo.component.html',
  styleUrls: ['./liste-bien-dispo.component.css']
})
export class ListeBienDispoComponent implements OnInit {
  biens: any[] = [];
  filters = {
    adresse: '',
    typePropriete: '',
    prix: null,
    // prix_max: null,
    superficie: null,
  };

  constructor(private route: ActivatedRoute, private bienService: BienService) { }

  ngOnInit(): void {
    // Récupérer les critères de recherche à partir des query params
    this.route.queryParams.subscribe(params => {
      this.filters.adresse = params['location'] || '';
      this.filters.typePropriete = params['typePropriete'] || '';
      this.filters.prix = params['prix'] || '';
      this.filters.superficie = params['superficie'] || '';

      // Appeler le service pour récupérer les biens disponibles
      this.bienService.getListeBienDispo(this.filters).subscribe(
        (data) => {
          this.biens = data;
        },
    );
  })
  }

  getListeBienDispo(): void {
    this.bienService.getListeBienDispo(this.filters).subscribe((data: any[]) => {
      this.biens = data;
    });
  }
}
