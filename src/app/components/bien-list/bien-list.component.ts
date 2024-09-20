import { Component,OnInit } from '@angular/core';
import { BienService } from '../../services/bien.service';
@Component({
  selector: 'app-bien-list',
  templateUrl: './bien-list.component.html',
  styleUrl: './bien-list.component.css'
})
export class BienListComponent implements OnInit {

  biens: any[] = [];
  filters = {
    adresse: '',
    type: '',
    prix: null,
    // prix_max: null,
    superficie: null,
    // superficie_max: null
  };

  constructor(private bienService: BienService) {}

  ngOnInit(): void {
    this.searchBiens();
  }

  searchBiens(): void {
    this.bienService.searchBiens(this.filters).subscribe((data) => {
      this.biens = data;
    });
  }
}
